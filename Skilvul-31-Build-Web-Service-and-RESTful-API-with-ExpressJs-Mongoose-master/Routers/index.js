const express = require('express')

// const userRoutes = require('./user')
const intructorRoutes = require('./instructor.route')
const courseRoutes = require('./course.route')
const participantRoutes = require('./participant.route')

const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

// router.use("/users", userRoutes)
router.use("/instructors", intructorRoutes)
router.use("/courses", courseRoutes)
router.use("/participants", participantRoutes)

module.exports = router