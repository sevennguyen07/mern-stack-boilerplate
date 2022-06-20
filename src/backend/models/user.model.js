import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
        type: 'string',
        maxLength: 50,
        required: true
    },
    passwords: {
        type: 'string',
        minLength: 6,
        required: true
    }
}, { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}})

export default mongoose.model('User', userSchema)