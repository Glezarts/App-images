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
    const urlFalsa ='https://picsum.photos/id/237/200/300';

    const titulo = req.body.titulo;
    const url = req.body.url;
    const date = req.body.date; 

    function existeImg (url){

        if (url == ) {
          
        }
    }

    existeImg();

    photos.addPhoto(titulo, url, date)

    res.redirect('/');

}