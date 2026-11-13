import fetchToOpenRouter from "../services/OpenRouterService.js"
import crypto from 'crypto'

const analyzeFood = async (req, res) => {
    try {
    
        const file = req.file
        const comment = req.body.comment

        if (!file) {
            return res.status(404).json({message: "Добавьте фото блюда"})
        }

        console.log(file);
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

export default analyzeFood