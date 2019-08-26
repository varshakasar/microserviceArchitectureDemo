const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = 'mongodb://localhost:27017';
//db name
const dbName = 'microservicedemo'

let options = { useNewUrlParser: true, useUnifiedTopology: true }

let dbInstance

let connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) reject(err)
            else {
                dbInstance = client.db(dbName)
                console.log("Connected successfully to server")
                resolve(dbInstance)
            }
        })
    })
}

module.exports.connect = connect