const express = require('express')
const mongoose = require('mongoose')
const studentSchema = require('../models/Students')

const router = express.Router()

// Create student
router.route('/createStudent').post((req,res,next) => {
	studentSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			console.log(data)
			res.json(data)
		}
	})
})

// Read student
router.route('/').get((req,res) => {
	studentSchema.find((error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})

// Get Single Student
router.route('/editStudent/:id').get((req,res,next) => {
	studentSchema.findById(req.params.id, (error, data) => {
		if (error)
			return next(error)
		else{
			res.json(data)
		}
	})
})

// Update Student
router.route('/updateStudent/:id').put((req,res,next) => {
	studentSchema.findByIdAndUpdate(
		req.params.id,
		{$set: req.body},
		(error,data) => {
			if (error) {
				return next(error)
				console.log(error)
			} else {
				res.json(data)
				console.log('Student updated successfully')
			}
		}
	)
})

// Delete Student
router.route('/deleteStudent/:id').delete((req,res,next) => {
	studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
		if (error)
			return next(error)
		else
			res.status(200).json({
				msg: data
			})
	})
})
module.exports = router