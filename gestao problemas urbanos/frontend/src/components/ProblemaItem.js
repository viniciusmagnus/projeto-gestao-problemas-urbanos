import React from 'react';

const ProblemaItem = ({ problema }) => (
  <li>
    <p><strong>Descrição:</strong> {problema.descricao}</p>
    <p><strong>Localização:</strong> {problema.localizacao}</p>
    {problema.foto && <img src={problema.foto} alt="Foto do Problema" style={{ width: '200px', height: 'auto' }} />}
  </li>
);

export default ProblemaItem;