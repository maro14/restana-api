const service = require('restana')()
const router = service.newRouter()
const User = require('../models/users')

router.get('/hello', (req, res) => {
    res.send("Hello from router", 200)
})

router.get('/', (req, res) => {
    const users = User.find({}, (err, docs) => {
        if (err) {
            res.send(err, 404)
        }
        res.send({
            data: docs,
            msg: 'Users found...'
        }, 200)
    })
    console.log(users, 'Users found...')

})

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
    user
        .save()
        .then((doc) => {
            res.send({
                data: doc,
                msg: 'User added...'
            }, 201)
        })
})

module.exports = router
