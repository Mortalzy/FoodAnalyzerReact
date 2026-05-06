import express from 'express'
import cors from 'cors'
import multer from 'multer'
import dotenv from 'dotenv'
import fs from 'fs'
import { error } from 'console'

dotenv.config()

const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(cors())

app.post('/api/analyze-food', upload.single('image'), async (req, res) => {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error('OPENROUTER_API_KEY is missing')
    }

    if (!req.file) {
      return res.status(400).json({
        error: 'Image is required',
        details: error.message,
      })
    }

    const comment = req.body.comment || ''
    const imagePath = req.file.path
    const mimeType = req.file.mimetype

    const imageBase64 = fs.readFileSync(imagePath, 'base64')
    const imageDataUrl = `data:${mimeType};base64,${imageBase64}`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `
Analyze this food photo.

User comment:
${comment}

Estimate nutrition values approximately.
Do NOT use 0 unless the food is truly absent.
If exact weight is unknown, estimate a realistic portion size in grams.

Return ONLY valid JSON without markdown.

JSON format:
{
  "title": "food name (Need a short name)",
  "weight": 250,
  "calories": 400,
  "proteins": 30,
  "fats": 15,
  "carbs": 40,
  "description": "short description",
  "confidence": 0.8
}

                `,
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType};base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error(data)
      alert(data.error || 'Something went wrong')
      return
    }

    fs.unlinkSync(imagePath)

    const aiText = data.choices[0].message.content

    console.log('AI TEXT:', aiText)

    const cleanText = aiText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim()

    const rawResult = JSON.parse(cleanText)

    const result = {...rawResult, foodImg: imageDataUrl}

    res.json(result)


  } catch (error) {
    console.error('SERVER ERROR:', error)

    let statusCode = 500
    let message = 'Failed to analyze food'

    if (error.message === 'OPENROUTER_API_KEY is missing') {
      statusCode = 401
      message = 'API token is missing'
    }

    res.status(statusCode).json({
      error: message,
      details: error.message,
    })
  }
})

app.listen(process.env.PORT, () => {
  console.log('Server running on http://localhost:3001')
})