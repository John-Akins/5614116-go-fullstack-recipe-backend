const http = require('http') // import Node native http package
const app = require('./app') // import app.js

// returns a valid port 
// even when a port is
// passed as a string

const normalizePort = (val) => {
    const port = parseInt(val, 10)

    if(isNaN(port))
    {
        return val
    }
    if(port >= 0)
    {
        return port
    }
    return false
}

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

// check for errors and handle them appropiately
// also registers them to the server
const errorHandler = error => {
    if(error.syscall !== 'listen')
    {
        throw error
    }
    const address = server.address()
    const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port
    switch (error.code)
    {
        case 'EACCESS':
            console.error(bind + 'requires elevated priviledges.')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + 'is already in use')
            process.exit(1)
            break
        default: 
            throw error
    }
}

const server = http.createServer(app)

server.on('error', errorHandler)
server.on('listening', () => {
    const address = server.address()
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port
    console.log('Listening on ' + bind)
})

server.listen(process.env.PORT || 3000)// ser server to listen with either production or local port
