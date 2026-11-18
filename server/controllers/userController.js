import UserParameterers from "../models/UserParameters.js"
import { User } from "../models/index.js"

const createUserParameters = async (req, res) => {
    try {
        const {
            user_id,
            age,
            weight,
            height,
            gender,
            activityCoefficient,
            goal,
            targetWeight,
            mealsPerDay,
        } = req.body

        const userParameters = await UserParameterers.create({
            user_id,
            age,
            weight,
            height,
            gender,
            activityCoefficient,
            goal,
            targetWeight,
            mealsPerDay,
        })

        res.status(200).json(userParameters)
    }
    catch (e) {
        res.status(500).json({message: e.message})
    }
}

const getUserParametersByUserId = async (req, res) => {
    try {
        const user_id = req.params.id

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(404).json({message: "Не найден пользователь с заданным id"})
        }

        const userParameters = await UserParameterers.findOne({where: {
            user_id: user_id,
        }})

        if (!userParameters) {
            return res.status(404).json({message: "Не найдены параметры заданного пользователя"})
        }

        return res.status(200).json(userParameters)

    } 
    catch(e) {
        return res.status(500).json(e.message)
    }
}

export {
    createUserParameters,
    getUserParametersByUserId,
}