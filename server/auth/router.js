const { Router } = require('express')
const { toJWT, toData } = require('./jwt')

const router = new Router()

// Now you will create an POST /login endpoint that allows a user to log in. We want to create a new login resource that contains a JWT.

// We should expect an email and a password in the JSON body. For now, since we're still testing and learning, we don't have a database with users and we simply allow anybody to login and receive a JWT.


router.post('/login', (req, res) => {
  // When the email and password are empty, we should return an HTTP 400 Bad Request with a descriptive message:
  if(!req.body.email || !req.body.password){
    return res.status(400).send({ message: 'Please give me some credentials, stranger' })
  }
  return res.send({
    jwt: toJWT({ userId: 1 })
  })
});

router.get('/secret-endpoint', (req, res) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      })
    }
    catch(error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router

//Add the POST /login endpoint to your app. In your index.js make sure you require and .use the file 'auth/router.js' so that the route is accessible.
// Test with http :4000/login email='alice@wonderland.com' password=downtherabbithole
