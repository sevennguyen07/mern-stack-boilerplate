class BaseService {
    constructor( model ) {
        this.model = model
    }

    create (body) {
        return this.model.create(body)
    }

    findById ( id, projection = { __v: 0 }, options = { lean: true } ) {
        return this.model
            .findById( id, projection, options )
            .exec()
    }

    findOne (query, projection = { _v: 0 }, options = { lean: true}) {
        return this.model
            .findOne(query, projection, options)
            .select({ __v: 0 })
            .exec()
    }

    find ( query, projection = { __v: 0 }, sort = { id: 1 }, options = { lean: true } ) {
        return this.model
            .find( query, projection, options )
            .sort( sort )
            .select( { __v: 0 } )
            .exec()
    }

    update ( id, body, options = { lean: true, new: true } ) {
        return this.model
          .findByIdAndUpdate( id, body, options )
          .exec()
    }
}

export default BaseService