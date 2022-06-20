import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    title: {
        type: 'string',
        maxLength: 50
    },
    description: {
        type: 'string'
    },
    thumbnail: {
        type: 'string'
    },
    url: {
        type: 'string'
    },
    shared_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}})

export default mongoose.model('Movie', movieSchema)