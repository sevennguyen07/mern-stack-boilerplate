import { Router } from 'express'
import authController from './controllers/auth.controller.js'
import movieController from './controllers/movie.controller.js'
import checkAuth from './middlewares/auth.js'

const router = Router()

router.get('/ping', (req, res) => { res.end('pong') })

//auth routes
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//movie routes
router.get('/movie/list', movieController.listMovies)
router.post('/movie/share', checkAuth, movieController.shareMovie)

export default router

