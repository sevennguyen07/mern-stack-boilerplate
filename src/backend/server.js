import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import routes from "./routes.js"

const port = 3001
const app = express()
app.use(cors())
app.use(json())
app.use(morgan('dev'))

// register all routes
app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	res.status(404).send({ status: false, message: 'Not found' })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
