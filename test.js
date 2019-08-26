const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = 'mongodb://localhost:27017';
//db name
const dbName = 'microservicedemo'

MongoClient.connect(url,(error,dbInstance) => {
    console.log('connected to db')
    const dbObj = dbInstance.db(dbName)
    // dbObj.close()
})


