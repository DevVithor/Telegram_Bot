import "dotenv/config"
import app from "./src/app.js"

const startServer = app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})

startServer