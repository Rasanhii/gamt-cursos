import { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isCursosOpen, setIsCursosOpen] = useState(false);
  const [isEmpresasOpen, setIsEmpresasOpen] = useState(false);

  const toggleCursos = () => setIsCursosOpen(!isCursosOpen);
  const toggleEmpresas = () => setIsEmpresasOpen(!isEmpresasOpen);

  return (
    <div className="sidebar">
      <div className="menu-item" onClick={toggleCursos}>
        <span>Cursos</span>
        <span className={`arrow ${isCursosOpen ? 'up' : 'down'}`} />
      </div>
      {isCursosOpen && (
        <div className="submenu">
          <a href="/excel">Excel Avançado</a>
          <a href="/word">Word Avançado</a>
          <a href="/powerpoint">PowerPoint Avançado</a>
          <a href="/powerbi">Power BI</a>
        </div>
      )}
      <div className="menu-item" onClick={toggleEmpresas}>
        <span>Empresas</span>
        <span className={`arrow ${isEmpresasOpen ? 'up' : 'down'}`} />
      </div>
      {isEmpresasOpen && (
        <div className="submenu">
          <a href="/empresa1">Empresa 1</a>
          <a href="/empresa2">Empresa 2</a>
          <a href="/empresa3">Empresa 3</a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
