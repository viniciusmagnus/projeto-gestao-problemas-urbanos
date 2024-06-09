const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  comentario: String,
  avaliacao: {
    type: Number,
    min: 1,
    max: 5
  },
  problema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problema'
  }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);