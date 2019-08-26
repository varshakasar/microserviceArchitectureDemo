const express = require('express')
const {data} = require('../services')
let handler = app => {
    app.get('/fetchdata',(req,res) => {
        data.fetchData(req,res)
    })
    app.post('/insertdata',(req,res) => {
        data.insertData(req,res)
    })
    app.post('/updateData',(req,res) => {
        data.updateData(req,res)
    })
    app.delete('/deleteData',(req,res) => {
        data.deleteData(req,res)
    })
}
exports.handler = handler