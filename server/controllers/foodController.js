import {Food} from '../models/index.js'
import fetchToOpenRouter from "../services/OpenRouterService.js"
import crypto from 'crypto'

const analyzeFood = async (req, res) => {
    try {
    
        const file = req.file
        const comment = req.body.comment

        if (!file) {
            return res.status(404).json({message: "Добавьте фото блюда"})
        }

        const {buffer, mimetype} = file
        const imageUrl = `data:${mimetype};base64,${buffer.toString('base64')}`

        let food = await fetchToOpenRouter(imageUrl, comment)

        const id = crypto.randomUUID()
        const foodWithId = {
            ...food,
            id: id,
        }

        return res.status(200).json(foodWithId)
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const createFood = async (req, res) => {
    try {
        const {
            title,
            imageUrl,
            weight,
            calories,
            proteins,
            fats,
            carbs,
        } = req.body

        const user_id = req.user.id

        const food = await Food.create({
            user_id,
            title,
            imageUrl,
            weight,
            calories,
            proteins,
            fats,
            carbs,
        })

        res.status(200).json(food)
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const getFoods = async (req, res) => {
    try {
        const user_id = req.user.id

        const foods = await Food.findAll({where: {
            user_id: user_id,
        }})

        res.status(200).json(foods)
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const deleteFoodById = async (req, res) => {
    try {
        const user_id = req.user.id
        const food_id = req.params.id
        
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const deleteAllFoods = async (req, res) => {
    try {
        await Food.destroy()

        return res.status(200).json([])
    }
    catch(e) {
        return res.status(500).json({message: e.message})
    }
}


export {
    analyzeFood,
    createFood,
    getFoods,
    deleteFoodById,
    deleteAllFoods
}