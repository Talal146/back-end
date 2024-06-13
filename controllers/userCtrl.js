const { User } = require('../models')
const middleware = require('../middleware')

// const register = async (req, res) => {
//   try {
//     let userObj
//     // Extracts the necessary fields from the request body
//     if (req.body.trainer) {
//       userObj = {
//         name: req.body.name,
//         contact: req.body.contact,
//         email: req.body.email,
//         // passwordDigest: req.body.passwordDigest,
//         trainer: true,
//         trainees: []
//       }
//     } else {
//       userObj = {
//         name: req.body.name,
//         contact: req.body.contact,
//         email: req.body.email,
//         // passwordDigest: req.body.passwordDigest,
//         weight: req.body.weight,
//         height: req.body.height,
//         trainer: false
//       }
//     }
//     console.log('printing password')
//     const { password } = req.body
//     // Hashes the provided password
//     console.log({ password })
//     let passwordDigest = await middleware.hashPassword(password)
//     // Checks if there has already been a user registered with that email
//     let existingUser = await User.findOne({ email: userObj.email })
//     console.log('before if statement')
//     if (existingUser) {
//       console.log('true existing user')
//       return res
//         .status(400)
//         .send('A user with that email has already been registered!')
//     } else {
//       console.log('false existing user')
//       // Creates a new user
//       const finalUserObj = { ...userObj, passwordDigest }
//       console.log('finalUserObj ==> ', JSON.stringify(finalUserObj, null, 2))
//       const user = await User.create({ ...userObj, passwordDigest })
//       // Sends the user as a response
//       res.send(user)
//     }
//   } catch (error) {
//     throw error
//   }
//   // let user = await User.create(userObj)
//   // res.send(user)
// }

// const Login = async (req, res) => {
//   try {
//     // Extracts the necessary fields from the request body
//     const { email, password } = req.body
//     // Finds a user by a particular field (in this case, email)
//     const user = await User.findOne({ email })
//     // Checks if the password matches the stored digest
//     let matched = await middleware.comparePassword(
//       user.passwordDigest,
//       password
//     )
//     // If they match, constructs a payload object of values we want on the front end
//     if (matched) {
//       let payload = {
//         id: user.id,
//         email: user.email
//       }
//       // Creates our JWT and packages it with our payload to send as a response
//       let token = middleware.createToken(payload)
//       return res.send({ user: payload, token })
//     }
//     res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//   } catch (error) {
//     console.log(error)
//     res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
//   }
// }

// const updatePassword = async (req, res) => {
//   try {
//     // Extracts the necessary fields from the request body
//     const { oldPassword, newPassword } = req.body
//     // Finds a user by a particular field (in this case, the user's id from the URL param)
//     let user = await User.findById(req.params.user_id)
//     // Checks if the password matches the stored digest
//     let matched = await middleware.comparePassword(
//       user.passwordDigest,
//       oldPassword
//     )
//     // If they match, hashes the new password, updates the db with the new digest, then sends the user as a response
//     if (matched) {
//       let passwordDigest = await middleware.hashPassword(newPassword)
//       user = await User.findByIdAndUpdate(req.params.user_id, {
//         passwordDigest
//       })
//       let payload = {
//         id: user.id,
//         email: user.email
//       }
//       return res.send({ status: 'Password Updated!', user: payload })
//     }
//     res
//       .status(401)
//       .send({ status: 'Error', msg: 'Old Password did not match!' })
//   } catch (error) {
//     console.log(error)
//     res.status(401).send({
//       status: 'Error',
//       msg: 'An error has occurred updating password!'
//     })
//   }
// }

// const CheckSession = async (req, res) => {
//   const { payload } = res.locals
//   res.send(payload)
// }

module.exports = {
  // register
  // Login,
  // updatePassword
  // CheckSession
}
