const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    name: {type: String, required: true},
    description:{ type: String, required: true},
    price: {type: number,},
    category: {type: string, required: true},
    inStock: Boolean,
    tags: {type: [] },
    createdAt: {Date}
})

const Book = mongoose.model("Book",bookSchema)
module.exports = Book