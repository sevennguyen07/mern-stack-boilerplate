import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)

	try {
		const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'test')
		req.user = payload

	} catch (error) {
		return res.sendStatus(403)
	}

	next()
}

export default verifyToken