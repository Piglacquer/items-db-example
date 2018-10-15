const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const queries = require('./queries')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    queries.getAll().then(response => res.json(response))
})

app.post('/', (req, res) => {
    queries.addItem(req.body).then(response => res.json(response))
})

app.delete('/:id', (req, res) => {
    queries.deleteItem(req.params.id).then(response => res.json(response))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})