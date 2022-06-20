const sendError = (req, res) => (error) => {
	const errMessage = error.message || 'Internal Server Error'
	const statusCode = error.statusCode || 500
	const response = {
		success: false,
		message: errMessage,
		stack: error.stack || '',
	}

	if (process.env.NODE_ENV !== 'development') {
		delete response.stack
	}

	res.status(statusCode).send(response)
}

export default sendError
