exports.getAllimages = (req,res)=>{
    const allphotos = photos.findAll()

    res.render('views/index', {photos: allphotos})
}





exports.getAddCat = (req, res) => {
    res.render('views/add-img')
}