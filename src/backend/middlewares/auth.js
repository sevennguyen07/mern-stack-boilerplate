import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization
	let token = null

	if( authHeader ){
		if( authHeader.split(' ')[0] === 'Bearer'){
			token = authHeader.split(' ')[1]
		} else {
			token = authHeader
		}
	}

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