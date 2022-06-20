import { expect } from 'chai'

export const expectThrowsAsync = async (action, errorMessage) => {
    let error = null
    try {
      await action()
    }
    catch (err) {
      error = err
    }

    expect(error).to.be.an('Error')

    if (errorMessage) {
      expect(error.message).to.equal(errorMessage)
    }
}