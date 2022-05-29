import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from "./routes/userRoutes.js"

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)




const port = process.env.PORT || 5000
app.listen(port, console.log(`Servee running in ${process.env.NODE_ENV} mode on ${port}`))