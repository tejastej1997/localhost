const jsonserver =require('json-server')

const server = jsonserver.create()
const route = jsonserver.router('db.json')
const middleware =jsonserver.defaults()
const cors = require('cors');

const port =process.env.PORT || 5000

server.use(middleware)
server.use(route)
server.use(cors())

server.listen(port)