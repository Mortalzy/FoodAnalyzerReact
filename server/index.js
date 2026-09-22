import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import sequelize from './db.js'


const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())

import authRouter from './routes/authRouter.js'
import foodRouter from './routes/foodRouter.js'
import userParameterRouter from './routes/userParameterRouter.js'

app.use('/api/user-parameters', userParameterRouter)
app.use('/api/auth', authRouter)
app.use('/api/foods', foodRouter)

const start = async () => {
  try {
    await sequelize.authenticate()
    console.log("Подключено к БД")

    await sequelize.sync({alter: true})
    console.log("Таблицы синхронизированы");
  
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (e) {
  console.log("Error: ", e)
  }
}

start()


