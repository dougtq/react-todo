let mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://sa:<PASSWORD>@dougtq-shard-00-00-nkzpm.mongodb.net:27017,dougtq-shard-00-01-nkzpm.mongodb.net:27017,dougtq-shard-00-02-nkzpm.mongodb.net:27017/test?ssl=true&replicaSet=dougtq-shard-0&authSource=admin')