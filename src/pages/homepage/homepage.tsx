import React from 'react';
import './homepage.css';
import excelImage from '../../assets/excel.jpg';
import wordImage from '../../assets/word3.jpg';
import powerImage from '../../assets/powerpoint4.jpg';
import powerbiImage from '../../assets/powerbi2.png';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleExcelClick = () => {
    navigate('/excel');
  };

  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>Cursos Online</h1>
        <p>Aprenda habilidades essenciais para o mercado de trabalho.</p>
        <div className="courses-container">
          {/* Card 1 */}
          <div className="curso" onClick={handleExcelClick}>
            <img src={excelImage} alt="Curso de Excel Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Excel Avançado</p>
              <span>Aprenda Excel do básico ao avançado com exercícios práticos.</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="curso">
            <img src={wordImage} alt="Curso de Word" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Word Avançado</p>
              <span>Domine as funções e ferramentas do Word aqui.</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="curso">
            <img src={powerImage} alt="Curso de Powerpoint Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de PowerPoint Avançado</p>
              <span>Desenvolva suas habilidades em confeccionar apresentações.</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="curso">
            <img src={powerbiImage} alt="Curso de Power BI Avançado" className="curso-image" />
            <div className="curso-info">
              <p>Curso de Power BI</p>
              <span>Aprenda uma ferramenta importante para o meio profissional.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
