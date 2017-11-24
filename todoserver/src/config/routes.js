const express = require('express')
const todoService = require('../api/todo/todoService')

module.exports = (server) => {
  const router = express.Router()
  server.use('/api', router)

  // Routes
  todoService.register(router, '/todos')
}
