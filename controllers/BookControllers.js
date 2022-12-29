const { ObjectId } = require('mongodb')
const Book = require('../models/book')
// const connect = require("../database/db")


exports.index = async(req,res)=>{
    // const db = await connect()
    // const book = await db.collection("book").find().toArray()
    const books = await Book.find() 
    res.json(books)
}
exports.store = async(req,res)=>{
    const db = await connect()
    await db.collection("book").insertOne(req.body)
    res.status(201).json()
}

exports.show = async(req,res)=>{
    const _id = ObjectId(req.params.id)
    // const db = await connect()
    // const book = await db.collection("book").find({_id}).toArray()
    const book = await Book.find({_id})
    res.json(book)
}

exports.update = async (req,res)=>{
    const _id = ObjectId(req.params.id)
    // const db = await connect()
    // await db.collection("book").updateOne({_id},{$set:req.body})
    await Book.updateOne({_id},{$set:req.body})
    res.json({data:"book is updated"})
}
exports.delete = async (req,res)=>{
    const _id = ObjectId(req.params.id)
    // const db = await connect()
    // await db.collection("book").deleteOne({_id})
    await Book.deleteOne({_id})
    res.status(204).json()
}
