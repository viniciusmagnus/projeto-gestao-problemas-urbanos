import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function Home() {
    return (
        <Container>
            <Typography variant="h3" align="center" sx={{ mt: 5, mb: 3 }}>
                Bem-vindo ao Sistema de Gestão de Problemas Urbanos da Prefeitura
            </Typography>

            <Typography variant="body1" align="center" sx={{ mb: 5 }}>
                Este sistema foi criado para facilitar a comunicação e resolução de problemas urbanos em nossa cidade.
            </Typography>

            <Typography variant="h4" sx={{ mb: 3 }}>
                Funcionalidades Principais:
            </Typography>

            <List sx={{ mb: 5 }}>
                <ListItem>
                    <ListItemText primary="Relatório de Problemas" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Acompanhamento em Tempo Real" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Feedback dos Cidadãos" />
                </ListItem>
            </List>

            <Button
                variant="contained"
                color="primary"
                href="/cadastrarproblema"
                sx={{ display: 'block', margin: 'auto', width: 'fit-content', mt: 2, ml: 2 }}
            >
                Cadastre um Problema
            </Button>
        </Container>
    );
}

export default Home;