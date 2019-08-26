const mongo = require('mongodb')
const ObjectId = mongo.ObjectID
const dbController = require('./db')
let fetchData = (req,res) => {
    return new Promise((resolve,reject) => {
        try{
            dbController.connect().then((db) => {
                let result = db.collection('user').find({}).toArray()
                resolve(result)
            })
            }catch(err){
                reject(err)
            }
    })
}
let insertData = (req,res) => {
    return new Promise((resolve,reject) => {
        try{
            let data = req.body
            dbController.connect().then((db) => {
                const collection = db.collection('user')
                collection.insertOne(data,(err,result) => {
                    if(err) throw new Error(err)
                    console.log('inserted')
                    resolve(result)
                })
            })
            }catch(err){
                reject(err)
            }
        })
}
let updateData =(req,res) => {
    return new Promise((resolve,reject) => {
        try{
            let {id,name,email,password} = req.body
            dbController.connect().then((db) => {
                const collection = db.collection('user')
                collection.updateOne({'_id':ObjectId(id)},{$set:{'name':name,'email':email,'password':password}},(err,result) => {
                    if(err) throw new Error(err)
                    console.log('updated')
                    resolve(result)
                })
            })
        }catch(e){
            reject(e)
        }
    })
}
let deleteData =(req,res) => {
    return new Promise((resolve,reject) => {
        try{
            let {id} = req.body
            dbController.connect().then((db) => {
                const collection = db.collection('user')
                collection.deleteOne({'_id':ObjectId(id)},(err,result) => {
                    if(err) throw new Error(err)
                    console.log('deleted')
                    resolve(result)
                })
            })
        }catch(e){
            reject(e)
        }
    })
} 
module.exports.fetchData = fetchData
module.exports.insertData = insertData
module.exports.updateData = updateData
module.exports.deleteData = deleteData