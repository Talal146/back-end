const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const PlansRouter = require('./routes/PlansRouter')
const WorkoutsRouter = require('./routes/WorkoutsRouter')
const UserRouter = require('./routes/UserRouter')
const ReviewsRouter = require('./routes/ReviewsRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/plans', PlansRouter)
app.use('/workouts', WorkoutsRouter)
app.use('/users', UserRouter)
app.use('/reviews', ReviewsRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
