const { data } = require('../middlewares/controllers')
let fetchData = (req,res) => {
    data.fetchData(req,res)
    .then(result => res.send(result))
    .catch(e => res.send(e))
}
let insertData = (req,res) => {
    data.insertData(req,res)
    .then(result => res.send(result))
    .catch(e => res.send(e))
}
let updateData = (req,res) => {
    data.updateData(req,res)
    .then(result => res.send(result))
    .catch(e => res.send(e))
}
let deleteData = (req,res) => {
    data.deleteData(req,res)
    .then(result => res.send(result))
    .catch(e => res.send(e))
}
module.exports.fetchData = fetchData
module.exports.insertData = insertData
module.exports.updateData = updateData
module.exports.deleteData = deleteData