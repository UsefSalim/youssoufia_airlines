const clientModel = require('../models').clientModel

exports.getAllClient = async (req, res) => {
  try {
    const allClient = await clientModel.findAll()
    allClient && res.status(200).json(allClient)
  } catch (err) {
    res.status(400).json(err)
  }
}
