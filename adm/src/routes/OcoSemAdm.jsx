import React from 'react';
import './OcoSemAdm.css'

const OcoSemAdm = () => {
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
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Data de Abertura</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1784nsjdoq8r88r</td>
              <td>2022-03-15</td>
              <td><a href="http://localhost:5173/Samuel7">Criado</a></td>
            </tr>
            <tr>
              <td>Quri9q9wnr9w9q919q</td>
              <td>2022-03-15</td>
              <td><a href="http://localhost:5173/Samuel7">Criado</a></td>
            </tr>                 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OcoSemAdm;
