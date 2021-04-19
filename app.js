const express = require('express')
const app = express()

const home = require('views/index')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

const imagesRoutes = require('./routes/images')

app.use('/images', imagesRoutes)

app.get('/', (req, res) => {
   
    res.render(home)
})

app.listen(3000)