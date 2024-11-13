import { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [showCursos, setShowCursos] = useState(false);
  const [showEmpresas, setShowEmpresas] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleCursos = () => setShowCursos(!showCursos);
  const toggleEmpresas = () => setShowEmpresas(!showEmpresas);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <div className="menu-item" onClick={toggleCursos}>
          <span>Cursos</span>
          <span className={`arrow ${showCursos ? 'up' : 'down'}`}></span>
        </div>
        {showCursos && (
          <div className="submenu">
            <a href="/excel">Excel Avançado</a>
            <a href="/word">Word Avançado</a>
            <a href="/powerpoint">PowerPoint Avançado</a>
            <a href="/powerbi">Power BI</a>
          </div>
        )}
        <div className="menu-item" onClick={toggleEmpresas}>
          <span>Empresas</span>
          <span className={`arrow ${showEmpresas ? 'up' : 'down'}`} />
        </div>
        {showEmpresas && (
          <div className="submenu">
            <a href="/empresa1">Empresa 1</a>
            <a href="/empresa2">Empresa 2</a>
            <a href="/empresa3">Empresa 3</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
