import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

import UserModel from '../models/user.model.js'
import BaseService from './base.service.js'

class UserService extends BaseService {
    constructor() {
		super()
		this.model = UserModel
	}

	async register({ email, password }) {
		const user = await this.findOne( { email } )
		if(user){
			throw new Error('Email is already existed.')
		}

		const salt = await bcrypt.genSalt(10)
		const hashPassword = await bcrypt.hash(password, salt)

		const newUser =  await this.create({
			email: email, 
			password: hashPassword
		})
		
		return _.pick(newUser, ['_id', 'email'])
	}

	async login({ email, password }) {
		const user = await this.findOne( { email } )
		if(!user){
			throw new Error('Email is invalid.')
		}

		//validate password
		const validPassword = await bcrypt.compare(password, user.password)
		if(!validPassword){
			throw new Error('Password is invalid.')
		}

		const payload = { _id: user._id, email: user.email }
		const token = jwt.sign(payload, process.env.TOKEN_SECRET || 'test', { expiresIn: process.env.TOKEN_EXPRIE || '1d' })

		return {
			...payload,
			token
		}
	}
}

export default new UserService()
