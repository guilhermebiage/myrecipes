const server = require('./config/server')
const connection = require('./config/database')
const Ingredient = require('./src/models/ingredient')

const PORT = process.env.PORT || 3000

const app = server()

app.listen(PORT, () => {
console.log(`listening on port ${PORT}`)

})
