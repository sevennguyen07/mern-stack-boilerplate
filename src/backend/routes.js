import { Router } from "express"

const router = Router()

router.get('/ping', (req, res) => { res.end('pong') })

export default router

