const sendSuccess = (req, res) => (body, message) => {
	res.send({
		success: true,
		message,
		data: body,
	})
}

export default sendSuccess

	
