
import movieService from '../services/movie.service.js'
import sendError from '../utils/sendError.js'
import sendSuccess from '../utils/sendSuccess.js'
import { validateShareInput } from '../vaidations/movie.validation.js'

const shareMovie = async (req, res) => {
    try {
        const { error } = validateShareInput(req.body)
        if(error) {
            throw new Error(error.details[0].message)
        }

        const result = await movieService.shareMovie({ user: req.user, url: req.body.url })
        sendSuccess(req, res)(result)
    } catch (error) {
        sendError(req, res)(error)
    }
}

const listMovies = async (req, res) => {
    try {
        const results = await movieService.listMovies(req.query)
        sendSuccess(req, res)(results)
    } catch (error) {
        sendError(req, res)(error)
    }
}

export default {
    shareMovie,
    listMovies
}