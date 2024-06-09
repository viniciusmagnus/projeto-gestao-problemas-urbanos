const mongoose = require('mongoose');

const ProblemaSchema = new mongoose.Schema({
    descricao: String,
    localizacao: String,
    foto: String,
    comentarios: [
        {
            comentario: String,
            avaliacao: Number,
        },
    ],
});

module.exports = mongoose.model('Problema', ProblemaSchema);