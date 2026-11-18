import { JwtVerify } from "../services/JwtService.js"

const authMiddleware = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization

        const token = authorization.split(" ")[1]

        if (!token) {
            return res.status(401).json({message: "Необходима авторизация"})
        }

        const decoded = JwtVerify(token)

        if (!decoded) {
            return res.status(401).json({message: "Некорректный токен"})
        }

        req.user = decoded

        next()
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

export default authMiddleware