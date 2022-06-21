import { assert, expect } from 'chai'
import sinon from 'sinon'
import userService from '../services/user.service.js'
import userModel from '../models/user.model.js'
import { expectThrowsAsync } from './helpers.js'

const userMock = {
    _id: '62b02beb2fe08e246ae2fecc',
    email: 'test@example.com',
    password: 'abc123',
    hash_password: '$2b$10$Uf4/ALNzwk704vXD6F8W/OL./cUYx3feSY.OM6WfmVbYlJeI4HGpi'
}

describe('User service', () => {
    afterEach(() => {
        sinon.restore()
    })

    it('Should exposes all needed functions' , () => {
        assert.isFunction(userService.register)
        assert.isFunction(userService.login)
    }),

    it('Should register successfully', async () => {
        sinon.stub(userModel, 'findOne').returns({
            select: function () {
                return this;
            },
            exec: function () {
                return null
            }
        })

        sinon.stub(userModel, 'create').returns({
                _id: userMock._id,
                email: userMock.email,
                password: userMock.hash_password
        })
            
        const newUser = await userService.register({ 
            email: userMock.email,
            password: userMock.password
         })

        expect(newUser.email).to.equal(userMock.email)
        expect(newUser._id).to.equal(userMock._id)
        expect(newUser.token).to.be.a('string')
    })

    it('Should register failed because same email are already existed', async () => {
        sinon.stub(userModel, 'findOne').returns({
            select: function () {
                return this
            },
            exec: function () {
                return {
                    _id: userMock._id,
                    email: userMock.email,
                    password: userMock.hash_password
                }
            }
        })

        await expectThrowsAsync(() => userService.register({ 
            email: 'test@example.com',
            password: 'abc123'
        }), 'Email is already existed.')
    })

    it('Should login successfully', async () => {
        sinon.stub(userModel, 'findOne').returns({
            select: function () {
                return this
            },
            exec: function () {
                return {
                    _id: userMock._id,
                    email: userMock.email,
                    password: userMock.hash_password
                }
            }
        })

        const response = await userService.login({
            email: 'test@example.com',
            password: 'abc123',
        })

        expect(response.email).to.equal(userMock.email)
        expect(response._id).to.equal(userMock._id)
        expect(response.token).to.be.a('string')
    })

    it('Should give error when login with unregistered email.', async () => {
        sinon.stub(userModel, 'findOne').returns({
            select: function () {
                return this
            },
            exec: function () {
                return null
            }
        })

        await expectThrowsAsync(() => userService.login({
            email: 'test@gmail.com',
            password: 'abc123'
        }), 'Email is invalid.')
    })

    it('Should give error when login with wrong password.',  async () => {
        sinon.stub(userModel, 'findOne').returns({
            select: function () {
                return this
            },
            exec: function () {
                return {
                    _id: userMock._id,
                    email: userMock.email,
                    password: userMock.hash_password
                }
            }
        })

        await expectThrowsAsync(() => userService.login({
            email: userMock.email,
            password: 'abc123556'
        }), 'Password is invalid.')
    })
})
