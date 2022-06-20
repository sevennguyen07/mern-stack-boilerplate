
import userService from '../services/user.service.js'
import sendError from '../utils/sendError.js'
import sendSuccess from '../utils/sendSuccess.js'
import { validateLoginInput, validateRegisterInput } from '../vaidations/auth.validation.js'

const register = async (req, res) => {
    try {
        const { error } = validateRegisterInput(req.body)
        if(error) {
            throw new Error(error.details[0].message)
        }

        const createdUser = await userService.register(req.body)

        sendSuccess(req, res)(createdUser, 'you have successfully registerd.')
    } catch (error) {
        sendError(req, res)(error)
    }
}

const login = async (req, res) => {
    try {
        const { error } = validateLoginInput(req.body)
        if(error) {
            throw new Error(error.details[0].message)
        }

        const result = await userService.login(req.body)
        sendSuccess(req, res)(result, 'you have successfully logged in.')
    } catch (error) {
        sendError(req, res)(error)
    }
}

export default {
    register,
    login
}