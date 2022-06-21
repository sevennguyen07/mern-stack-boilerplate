import _ from 'lodash'
import getVideoId from 'get-video-id'
import * as yt from 'youtube-info-streams'
import MovieModel from '../models/movie.model.js'
import BaseService from './base.service.js'

class MovieService extends BaseService {
    constructor() {
		super()
		this.model = MovieModel
	}

    async getMovieInfoUrl(url){
        try {
            const { id } = getVideoId(url)
            const info = await yt.info(id)
            return info
        } catch (error) {
            throw new Error('Cannot get movie info. Please check your movie url and try again.')
        }
    }

	async shareMovie({ user, url }){
        const info = await this.getMovieInfoUrl(url)

        return this.create({
            title: _.get(info, 'videoDetails.title', ''),
            description: _.get(info, 'videoDetails.shortDescription', ''),
            shared_by: user._id,
            url: url,
            iframe_url: _.get(info, 'videoDetails.embed.iframeUrl')
        })
    }

    async listMovies({ page = 1, limit = 20 }){
        const validPage = page ? parseInt(page, 10) : 1
        const validLimit = limit ? parseInt(limit, 10) : 20
        const skip = (validPage - 1) * validLimit

        const [total, movies] = await Promise.all([
            this.count({}),
            this.model
                .find({}, { __v: 0 }, { lean: true, skip: skip, limit: validLimit})
                .sort({_id: -1})
                .populate('shared_by', '_id email')
        ])

        const totalPage = Math.ceil(total/validLimit)
        return {
            total: total,
            page: validPage,
            limit: validLimit,
            total_page: totalPage,
            movies: movies
        }

    }
}

export default new MovieService()
