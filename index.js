import express from "express";
import router from './routers/students.js'
const PORT = 8081

const app = express()

app.use(express.json())
app.use('/api' , router)

app.get('/' , (req , res) => {
    res.status(200).json('Сервер работает')
})

app.listen(PORT , () => {
    console.log('Server started on port ' + PORT)
})