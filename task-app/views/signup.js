const Joi = require("joi")

const signup = function (req, res) {
  const { error, value } = validator.validate(req.body)
  if (error)
    res.render("signup", errorBuilder(error))
}

const validator = Joi.object().keys({
  username: Joi.string().min(5).max(15).required(),
  sex: Joi.string().valid("male", "female", "other"),
  email: Joi.string().required(),
  password: Joi.string().min(5).max(20).required(),
  confirm_password: Joi.any().valid(Joi.ref('password')).required().options({}),
  dp: Joi.any()
})

const errorBuilder = function (error) {
  message = error.details[0].message
  id = message.split(" ")[0]
  locals = { id: id, message: message, values: error._original }
  return locals
}

module.exports = signup