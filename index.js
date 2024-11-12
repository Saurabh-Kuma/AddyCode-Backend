const express= require('express');
const app= express();
const cors= require('cors');
const homeRouter= require("./routes/home")
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/contact', homeRouter)

app.listen(port, ()=>console.log(`running on website: http://localhost:${port}`))

module.exports= app;