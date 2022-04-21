const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const connecttomongo = require('./db')
const port = process.env.PORT || 5000

connecttomongo()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'build')));

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`cloudnotes-backend listening at http://localhost:${port}`)
})