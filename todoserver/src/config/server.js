const Express = require('express')
const bodyParser = require('body-parser')
let server = Express()

server.set('port', 3000)
server.use(bodyParser.urlencoded({ extended: true }))

server.listen(server.set('port'), () => {
  console.log('Servidor rodando na porta ', server.set('port'))
})