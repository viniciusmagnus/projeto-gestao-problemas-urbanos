import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import api from '../api';

const CadastrarProblema = () => {
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/problemas', { descricao, localizacao, foto });
      alert('Problema cadastrado com sucesso!');
      setDescricao('');
      setLocalizacao('');
      setFoto('');
    } catch (error) {
      alert('Erro ao cadastrar problema.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" sx={{ mt: 5, mb: 3 }} gutterBottom>
        Cadastrar Problema
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Localização"
              variant="outlined"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Foto (URL)"
              variant="outlined"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CadastrarProblema;