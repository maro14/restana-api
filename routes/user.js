const service = require('restana')()
const router = service.newRouter()
const User =  require('../models/users')

router.get('/hello', (req, res) => {
    res.send("Hello from router", 200)
})

router.get('/', (req, res) => {
    const users = User.find({}, (err, docs) => {
        if (err) {
            res.send(err, 404)
        }
        res.send(docs, 200)
    })
    console.log(users, {
        message: 'User found'
    })

})

module.exports = router
