const clientModel = require('../models').clientModel
const { clientValidations } = require('../validations/Test.validations')
exports.getAllClient = async (req, res) => {
  try {
    const allClient = await clientModel.findAll()
    allClient && res.status(200).json(allClient)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.addClient = async (req, res) => {
  const { error } = clientValidations(req.body)
  error && res.status(400).json(error.details[0].message)
  try {
    const newClient = new clientModel({ ...req.body })
    const addClient = await newClient.save()
    addClient && res.status(201).json('cleint created')
  } catch (error) {
    res.status(400).json(error)
  }
}
