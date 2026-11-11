import { Router } from "express";
import multer from 'multer'
import analyzeFood from "../controllers/foodController.js";

const router = Router()

const upload = multer({limits: {fileSize: 10 * 1024 * 1024}})

router.post('/analyze', upload.single('image'), analyzeFood)

export default router