import fs from 'fs'

const envContent = `OPENROUTER_API_KEY=add-your-key
PORT=3001
`

if (fs.existsSync('.env')) {
  console.log('.env already exists')
} else {
  fs.writeFileSync('.env', envContent)
  console.log('.env created successfully')
}