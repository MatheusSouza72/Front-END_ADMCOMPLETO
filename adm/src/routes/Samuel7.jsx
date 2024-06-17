import React from 'react';
import './Samuel7.css';

const Samuel7 = () => {

  const adminInfo = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    birthDate: '1990-01-01',
    position: 'Administrator',
    username: 'johndoe'
  };

  return (
    <div className="admin-container">
      <h2 className="adm">Listar Ocorrências sem Adiministrador</h2>
      <a href="http://localhost:5173" className="main-link">LOGOUT</a>
      <div className="admin-info">
        <h2>Informação Administrador</h2>
        <p><strong>Nome Completo:</strong> {adminInfo.fullName}</p>
        <p><strong>Email:</strong> {adminInfo.email}</p>
        <p><strong>Data de Nascimento:</strong> {adminInfo.birthDate}</p>
        <p><strong>Cargo:</strong> {adminInfo.position}</p>
        <p><strong>Login:</strong> {adminInfo.username}</p>
      </div>       
        <div className="q">
          <p>Codigo:</p>
          <p>Nome Solicitante:</p>
          <p>Contato:</p>
          <p>Descrição:</p>
          <p>Data de Abertura:</p>
          <p>Data de Fechamento:</p>
          <p>Descrição:</p>
          <p>Observação:</p>
          <p>Login Admin:</p>
          <p>Status:</p>
        </div>     
      <div className="btn-container">
      <a href="" className="main-link">Salvar</a>
      <a href="" className="main-link">Editar</a>
      </div>
    </div>    
  );
};

export default Samuel7;
