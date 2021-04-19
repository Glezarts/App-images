const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

const imagesRoutes = require('./routes/images')

app.use('/', imagesRoutes)



app.listen(3000)