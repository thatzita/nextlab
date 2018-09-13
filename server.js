const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = 3000

app.prepare()
.then(() => {
const server = express()

server.get('/api', (req, res) => {
    console.log(req.url);
    res.send("alot of information that we want to share with the world")
    
})

server.get('*', (req, res) => {
    return handle(req, res)
})

server.listen(port, (err) => {
if (err) throw err
    console.log('> Ready on http://localhost:' + port)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})