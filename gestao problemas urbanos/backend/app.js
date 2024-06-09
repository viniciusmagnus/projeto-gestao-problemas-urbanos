const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Problema = require('./models/Problema');
const Comentario = require('./models/Comentario');

const corsOptions = {
  origin: 'http://localhost:3001', // URL do seu frontend
  optionsSuccessStatus: 200
};
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/problemas')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

app.post('/problemas', async (req, res) => {
  const problema = new Problema(req.body);
  await problema.save();
  res.status(201).send(problema);
});

app.get('/problemas', async (req, res) => {
    try {
        const problemas = await Problema.find();
        res.status(200).send(problemas);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/problemas/:problemaId/comentarios', async (req, res) => {
  const { problemaId } = req.params;
  const { comentario, avaliacao } = req.body;

  try {
    const problema = await Problema.findById(problemaId);
    if (!problema) {
      return res.status(404).send({ error: 'Problema não encontrado' });
    }

    const novoComentario = new Comentario({ comentario, avaliacao, problema: problemaId });
    await novoComentario.save();

    problema.comentarios.push(novoComentario);
    await problema.save();

    res.status(201).send(novoComentario);
  } catch (error) {
    console.error('Erro ao adicionar comentário:', error);
    res.status(500).send({ error: 'Erro interno do servidor' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});