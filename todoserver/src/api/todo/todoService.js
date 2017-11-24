const Todo = require('./todoSchema')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo