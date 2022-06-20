import { Router } from 'express'
import authController from './controllers/auth.controller.js'

const router = Router()

router.get('/ping', (req, res) => { res.end('pong') })

//auth routes
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

export default router

