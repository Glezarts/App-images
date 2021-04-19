const BBDD_photos = [{
    id: 1,
    name: 'Loki',
    url: 'Vulgaris',
    date: ''
}, {
    id: 2,
    name: 2,
    url: 'Canela',
    date: ''
}, {
    id: 3,
    name: 'Tach',
    url: 'Carey',
    date: ''
}]
const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_photos
}

exports.addPhoto = (name, race) => {
    const newPhoto =
    {
        id: uuid.v1(),
        name: name,
        url: url,
        date: new date()
    }

    // El hecho de mantener en el modelo la manera que insertamos un nuevo registro en la BBDD; nos permite que si en el futuro nuestra BBDD cambia, solo tengamos que realizar las modificaciones en este fichero 
    
    // mongoDB.insert({name: name, race:race})
    BBDD_photos.push(newPhoto)
}
