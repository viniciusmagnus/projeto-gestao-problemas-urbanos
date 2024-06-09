import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Sistema de Gestão de Problemas Urbanos
        </Typography>
        <Button component={Link} to="/cadastrarproblema" color="inherit">Cadastrar Problema</Button>
        <Button component={Link} to="/problemas" color="inherit">Mostrar Problemas</Button>
        {/* Adicione mais botões conforme necessário */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;