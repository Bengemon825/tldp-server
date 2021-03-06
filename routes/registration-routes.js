import express from 'express'
import registrationController from '../controllers/registration-controller.js'
var registrationRouter = express.Router()

registrationRouter.get('/', function(req, res) {
  registrationController.getAllRegistrations(req,res)
})

registrationRouter.get('/:registration_id', function(req, res) {
  registrationController.getRegistrationById(req, res)
})

registrationRouter.post('/', function(req, res) {
  registrationController.postRegistration(req, res)
})

registrationRouter.delete('/:registration_id', function(req, res) {
  registrationController.deleteRegistrationById(req, res)
})

export default registrationRouter

