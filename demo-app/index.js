const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi there')
})

app.listen(3001, () => {
    console.log(`listening on port 3001`)
})
