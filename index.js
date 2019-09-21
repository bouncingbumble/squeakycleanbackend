require('dotenv').config()

const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8081
const routes = require('./routes/index')
const db = require('./db/index')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

//server
app.listen(port, () => {
    console.log('App is running on port ' + port)
})