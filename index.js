const express = require('express')
const app = express()
const port = process.env.PORT || 4000
// Import the model in your index.js.
app.use(db)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
