const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)


const getAll = () => {
    return knex('items')
}

const addItem = (newItem) => {
    return knex('items').insert(newItem).returning('*')
}

const deleteItem = (id) => {
    return knex('items').where('id', id).delete()
}

module.exports = {
    getAll,
    addItem,
    deleteItem
}