const server = require('./config/server')

const PORT = process.env.PORT || 3000

const app = server()

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
