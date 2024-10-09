import './homepage.css';
import excelImage from '../../assets/excel-avancado-1.jpg';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="sidebar">
        <img src="src/assets/gamt.png" alt="Gamt" className="logo" />
      </div>
      <div className="main-content">
        <div className="courses-container">
          <div className="curso">
            <img src={excelImage} alt="Curso de Excel Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Excel Avançado</p>
              <span>Aprenda Excel do básico ao avançado com exercícios práticos.</span>
            </div>
          </div>
          <div className="curso">
            <p>Curso de Node.js</p>
            <span>Dominando o backend com Node.js.</span>
          </div>
          <div className="curso">
            <p>Curso de TypeScript</p>
            <span>Tipos no JavaScript para maior segurança.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
