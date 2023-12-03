const express = require('express')
const app = express()
const port = 3000

app.get('/j', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const path = require('path')
app.use('/', express.static(path.join(__dirname, 'build')))