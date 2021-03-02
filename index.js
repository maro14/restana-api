const service = require('restana')()
const bodyParser = require('body-parser')
const UserRouter = require('./routes/user')
const mongoose = require('mongoose')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const http = require('http')
require('dotenv').config()

service.use(bodyParser.json())
service.use(cors())
service.use(helmet())
service.use(logger("dev"))

const PORT = process.env.PORT || 5000
const connectMongoDB = process.env.MONGO_URL

mongoose.connect(connectMongoDB , {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(conn => {
    console.log('MongoDB Connected')
}).catch(err => {
    console.log('MongoDB not found???', err)
})

service.get('/', (req, res) => {
    res.send({
        message: 'Welcome to user Api'
    }, 200)
})

//router
service.use('/user', UserRouter)

http.createServer(service).listen(PORT, 'localhost', () => {
    console.log(`Server on ${PORT}`)
})
