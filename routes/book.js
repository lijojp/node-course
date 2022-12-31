const express = require('express')
const { ObjectId } = require('mongodb')
const bookRouter = express.Router()
const connect = require("../database/db")
const BookController =require("../controllers/BookControllers")
const auth = require("../middleware/auth")

bookRouter
.use(auth)
.route('/')
.get(BookController.index)
.post(BookController.store)

bookRouter
.route('/:id')
.get(BookController.show)
.patch(BookController.update)
.delete(BookController.delete)

module.exports = bookRouter;