//Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>       
      <Link to="/Admin">Administrador</Link> 
      <Link to="/Funcionario">Funcionario</Link>      
      <Link to="/Tabela">Processos sem Administrador</Link>
      <Link to="/Tabela2">Processos do Administrador</Link>      
    </nav>
  );
}

export default Navbar;
