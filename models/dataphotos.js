
const BBDD_photos = [{
    id: 1,
    titulo: 'Loki',
    url: 'https://picsum.photos/id/237/200/300',
    date: '16/04/2012'
}, {
    id: 2,
    titulo: 'Hola',
    url: 'https://picsum.photos/seed/picsum/200/300',
    date: '29/03/2021'
}, {
    id: 3,
    titulo: 'Tach',
    url: 'https://picsum.photos/200/300?grayscale',
    date: '12/09/2013'
}]
const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_photos
}

exports.addPhoto = (titulo, url, date) => {
   
    const newPhoto =
    {
        id: uuid.v1(),
        titulo: titulo,
        url: url,
        date: date
    }

    // El hecho de mantener en el modelo la manera que insertamos un nuevo registro en la BBDD; nos permite que si en el futuro nuestra BBDD cambia, solo tengamos que realizar las modificaciones en este fichero 
    
    // mongoDB.insert({name: name, race:race})
    BBDD_photos.push(newPhoto)
}
