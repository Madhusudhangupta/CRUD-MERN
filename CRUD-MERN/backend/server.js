const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db/conn')

const app = express()
const studentRoute = require('./routes/student.route')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(cors())
app.use('/students',studentRoute)

// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})

//404 Error
app.use((req, res, next) => {
	next(createError(404))
  })

app.use((err,req,res,next) => {
	console.error(err.message)
	if (!err.statusCode)
		err.statusCode = 500
	res.status(err.statusCode).send(err.message)
})