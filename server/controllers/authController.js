import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import { JwtService } from '../services/JwtService.js'

const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body

        const user = await User.findOne({where: {email: email}})
        if(!user) {
            return res.status(404).json({message: "Пользователя с заданной почтой не найдено"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash)
        if(!isPasswordValid) {
            return res.status(401).json({message: "Неверный пароль!"})
        }

        const token = JwtService(user.id, user.email)

        return res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                second_name: user.second_name,
                email: user.email
            },
            token
        })


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const register = async (req, res) => {
    try {
        const {
            name,
            second_name, 
            email,
            password,
        } = req.body

        const candidate = await User.findOne({where: {email: email}})
        if(candidate) {
            return res.status(409).json({message: "Пользователь с выбранным email уже существует"})
        }

        const password_hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            name: name,
            second_name: second_name,
            email: email,
            password_hash: password_hash,
        })

        const token = JwtService(user.id, user.email)

        res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                second_name: user.second_name,
                email: user.email
            },
            token
        })


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {
    login,
    register,
}