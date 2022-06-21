import { assert, expect } from 'chai'
import sinon from 'sinon'
import movieService from '../services/movie.service.js'
import movieModel from '../models/movie.model.js'

const mockMovies = [
    {
        _id: 1,
        title: 'title 1',
        descript: 'description 1',
        url: 'https://www.youtube.com/watch?v=1',
        shared_by: '1'
    },
    {
        _id: 2,
        title: 'title 2',
        descript: 'description 2',
        url: 'https://www.youtube.com/watch?v=2',
        shared_by: '2'
    }
]

describe('Movie service', () => {
    afterEach(() => {
        sinon.restore()
    })

    it('Should exposes all needed functions', () => {
        assert.isFunction(movieService.shareMovie)
        assert.isFunction(movieService.listMovies)
    })

    it('Should return video info', async () => {
        const response = await movieService.getMovieInfoUrl('https://www.youtube.com/watch?v=4ClXZXJznzU')

        expect(response.videoDetails.title).to.equal('#AsianQualifiers - Group B | Japan 1 - 1 Vietnam')
        expect(response.videoDetails.shortDescription).to.equal('Vietnam secured a historic point to round off their AFC Asian Qualifiers – Road to Qatar™ Group B campaign after surviving a second-half onslaught to earn a 1-1 draw against FIFA World Cup-bound Japan at Saitama Stadium on Tuesday.\n\nFacebook: https://www.facebook.com/AFCAsianCup\nTwitter: https://twitter.com/afcasiancup\nInstagram:  http://instagram.com/afcasiancup')
    })

    it('Should return correct response when the listMovies function is called', async () => {
        sinon.stub(movieModel, 'countDocuments').returns(5)
        sinon.stub(movieModel, 'find').returns({
            sort: function () {
                return this
            },
            select: function () {
                return this
            },
            populate: function () {
                return mockMovies
            }
        })
            
        const response = await movieService.listMovies({page: 1, limit: 2})

        expect(response.total).to.equal(5)
        expect(response.page).to.equal(1)
        expect(response.limit).to.equal(2)
        expect(response.total_page).to.equal(3)
        expect(response.movies).to.eql(mockMovies)
    })

    it('Should return correct response when the shareMovie function is called', async () => {
        sinon.stub(movieModel, 'create').returns({
            "title": "The Complete Node js: The Node js Event Loop",
            "description": "",
            "url": "https://www.youtube.com/watch?v=6YgsqXlUoTM&t=578s",
            "shared_by": "62b07dcb040519651e483b26",
            "_id": "62b08233ad4ae8baa846046b",
            "createdAt": "2022-06-20T14:20:35.435Z",
            "updatedAt": "2022-06-20T14:20:35.435Z"
        })
        

        const mockBody = { 
            user: {
                _id: '62b07dcb040519651e483b26'
            }, 
            url: 'https://www.youtube.com/watch?v=6YgsqXlUoTM&t=578s' 
        }

        const response = await movieService.shareMovie(mockBody)

        expect(response.title).to.equal('The Complete Node js: The Node js Event Loop')
        expect(response.description).to.equal('')
        expect(response.url).to.equal(mockBody.url)
        expect(response.shared_by).to.equal(mockBody.user._id)
    })
})
