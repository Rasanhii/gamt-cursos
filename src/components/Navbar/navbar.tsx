import './Navbar.css';
import gamtHeader from '../../assets/gamt-header.png'; // Importando a imagem corretamente

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={gamtHeader} alt="Gamt Header" className="navbar-logo" />
      <ul className="nav-links">
        <li><a href="/">Cursos</a></li>
        <li><a href="/gamt-cursos/sobre">Sobre</a></li>
        <li><a href="/gamt-cursos/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
