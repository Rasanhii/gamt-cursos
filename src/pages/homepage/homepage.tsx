import './homepage.css';
import excelImage from '../../assets/excel.jpg';
import wordImage from '../../assets/word3.jpg';
import powerImage from '../../assets/powerpoint4.jpg';
import powerbiImage from '../../assets/powerbi2.png';
import { useNavigate } from 'react-router-dom'; // Importa o hook para navegação

const Home = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleExcelClick = () => {
    navigate('/excel'); // Redireciona para a página de excel
  };

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <img src="src/assets/gamt-header.png" alt="Gamt" className="logo" />
      </div>
      <div className="main-content">
        <div className="courses-container">

          <div className="curso" onClick={handleExcelClick}>
            <img src={excelImage} alt="Curso de Excel Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Excel Avançado</p>
              <span>Aprenda Excel do básico ao avançado com exercícios práticos.</span>
            </div>
          </div>

          <div className="curso">
            <img src={wordImage} alt="Curso de Word" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Word Avançado</p>
              <span>Domine as funções e ferramentas do Word aqui.</span>
            </div>
          </div>

          <div className="curso" onClick={handleExcelClick}>
            <img src={powerImage} alt="Curso de Powerpoint Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Powerpoint Avançado</p>
              <span>Desenvolva suas habilidades em confeccionar apresentações.</span>
            </div>
          </div>

          <div className="curso" onClick={handleExcelClick}>
            <img src={powerbiImage} alt="Curso de Power BI Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Power BI</p>
              <span>Aprenda uma ferramenta importante para o meio profissional.</span>
            </div>
          </div>
          
          <div className="curso">
            <p>Curso de TypeScript</p>
            <span>Tipos no JavaScript para maior segurança.</span>
          </div>
          <div className="curso">
            <p>Curso de TypeScript</p>
            <span>Tipos no JavaScript para maior segurança.</span>
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
