import { Router } from 'express'
import authController from './controllers/auth.controller.js'
import movieController from './controllers/movie.controller.js'
import checkAuth from './middlewares/auth.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

const router = Router()

router.get('/ping', (req, res) => { res.end('pong') })

//apis doc
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup({...swaggerDocument, host: process.env.API_BASE_HOST || 'localhost:3001'}, { explorer: true }))

//auth routes
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//movie routes
router.get('/movie/list', movieController.listMovies)
router.post('/movie/share', checkAuth, movieController.shareMovie)

export default router

