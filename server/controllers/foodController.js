import fetchToOpenRouter from "../services/OpenRouterService.js"

const analyzeFood = async (req, res) => {
    const {file, comment} = req.body

    if (file) {
        return res.status(404).json({message: "Добавьте фото блюда"})
    }

    console.log(file);

    //const food = await fetchToOpenRouter()

    //return res.status(200).json(food)
}

export default analyzeFood