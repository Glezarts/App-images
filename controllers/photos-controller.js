const photos = require("../models/dataphotos")

exports.getAllPhotos = (req,res)=>{
    const allphotos = photos.findAll()
    console.log(allphotos);
    res.render('index', {photos: allphotos})
}





exports.getAddPhoto = (req, res) => {
    res.render('add-img')
}

exports.postAddPhoto = (req, res) =>{

    const name = req.body.name
    const url = req.body.url
    const date = new Date(); 

    photos.addPhoto(name, url, date)

    res.redirect('/');

}