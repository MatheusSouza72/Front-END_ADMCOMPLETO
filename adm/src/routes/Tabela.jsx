import React from 'react';

const Tabela = () => {
  const adminInfo = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    birthDate: '1990-01-01',
    position: 'Administrator',
    username: 'johndoe'
  };

  return (
    <div className="admin-container">
      <h2 className="adm">Listar Ocorrências Sem Adiministrador</h2>
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
              <th>OC</th>
              <th>Codigo</th>
              <th>Data de abertura</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>7658hgftf6r6456</td>
              <td>2022-03-15</td>
              <td><a href="http://localhost:5173/Samuel11">Criado</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>se6778th6r7</td>
              <td>2022-03-15</td>
              <td><a href="http://localhost:5173/Samuel11">Criado</a></td>
            </tr>                      
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabela;
