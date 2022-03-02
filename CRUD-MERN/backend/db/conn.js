require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
})
.then(() => {
	console.log('Database connected successfully')
})
.catch((err)=> {
	console.log(err)
})