import './navbar.css';
import gamtHeader from '../../assets/gamt-header.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={gamtHeader} alt="Gamt Header" className="navbar-logo" />
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><a href="/">Cursos</a></li>
          <li><a href="/gamt-cursos/sobre">Sobre</a></li>
          <li><a href="/gamt-cursos/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
