import mongoose from 'mongoose'

export default (mongoURI) => {
	mongoose
		.connect(mongoURI, { useNewUrlParser: true })
		.then(() => console.log('MongoDB connected'))
		.catch((err) => console.log(err))

	mongoose.connection.on('error', (err) => {
		console.log(err)
		process.exit()
	})
}
