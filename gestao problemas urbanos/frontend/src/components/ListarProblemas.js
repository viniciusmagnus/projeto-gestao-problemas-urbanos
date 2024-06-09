import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, TextField, Button, Box } from '@mui/material';
import api from '../api';
import ProblemaItem from './ProblemaItem';

const ListarProblemas = () => {
  const [problemas, setProblemas] = useState([]);
  const [comentario, setComentario] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [commentsOpen, setCommentsOpen] = useState(false);

  useEffect(() => {
    const fetchProblemas = async () => {
      try {
        const response = await api.get('/problemas');
        setProblemas(response.data);
      } catch (error) {
        alert('Erro ao buscar problemas.');
      }
    };

    fetchProblemas();
  }, []);

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleAvaliacaoChange = (event) => {
    setAvaliacao(event.target.value);
  };

  const enviarComentario = async (problemaId) => {
    try {
      await api.post(`/problemas/${problemaId}/comentarios`, { comentario, avaliacao });
      alert('Comentário enviado com sucesso!');
      setComentario('');
      setAvaliacao('');
    } catch (error) {
      alert('Erro ao enviar comentário.');
    }
  };

  const toggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ mt: 5, mb: 3 }}>
        Listagem de Problemas
      </Typography>
      <List>
        {problemas.map((problema) => (
          <React.Fragment key={problema._id}>
            <ListItem sx={{ border: '1px solid #ccc', borderRadius: '5px', mb: 2, display: 'flex', flexDirection: 'column'}}>
              <ListItemText
                primary={problema.descricao}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="textPrimary">
                      Descrição:
                    </Typography>
                    {` ${problema.descricao}`}
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Endereço:
                    </Typography>
                    {` ${problema.localizacao}`}
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Imagem:
                    </Typography>
                    {` ${problema.foto}`}
                    <br />
                    <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', p: 1, mt: 2 }}>
                      <TextField
                        label="Comentário"
                        variant="outlined"
                        value={comentario}
                        onChange={handleComentarioChange}
                        fullWidth
                        multiline
                        rows={3}
                        sx={{ mt: 1 }}
                      />
                      <TextField
                        label="Avaliação (1 a 5 estrelas)"
                        variant="outlined"
                        value={avaliacao}
                        onChange={handleAvaliacaoChange}
                        fullWidth
                        type="number"
                        InputProps={{
                          inputProps: { min: 1, max: 5 },
                        }}
                        sx={{ mt: 1 }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => enviarComentario(problema._id)}
                        sx={{ mt: 1 }}
                      >
                        Enviar Comentário
                      </Button>
                    </Box>
                  </React.Fragment>
                }
              />
              <Box>
                <Button onClick={toggleComments} sx={{ mb: 2 }}>
                  {commentsOpen ? 'Esconder Comentários' : 'Mostrar Comentários'}
                </Button>
                {commentsOpen && (
                  <List>
                    {problema.comentarios.map((comentario) => (
                      <ListItem key={comentario._id} sx={{ border: '1px solid #ccc', borderRadius: '5px', mb: 1 }}>
                        <ListItemText
                          primary={`Comentário: ${comentario.comentario}`}
                          secondary={`Avaliação: ${comentario.avaliacao}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>


            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default ListarProblemas;