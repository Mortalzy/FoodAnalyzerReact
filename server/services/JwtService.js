import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const JwtService = (userId, userEmail) => {
    return jwt.sign(
        {
            id: userId,
            email: userEmail,
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn: '7d'}
    )
}