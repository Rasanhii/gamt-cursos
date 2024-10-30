//import React from 'react';
import './excel.css'; 

const Excel = () => {

  const handleExcelClick = () => {
    // Abre uma nova guia com o link do curso de Excel
    window.open('https://lms.santanderopenacademy.com/courses/273', '_blank');
  };
      
  return (
    <div className="container excel-container">
      {/* Sidebar fixa */}
      <div className="sidebar">
        <img src="" alt="Gamt" className="logo" />
      </div>

      {/* Conteúdo principal */}
      <div className="excel-content">
        {/* Introdução sobre a importância do Excel */}
        <div>
          <h1>A importância do Excel no meio corporativo</h1>
          <p>
            O Excel é uma das ferramentas mais utilizadas no mundo corporativo para organização, análise e visualização de dados.
            Dominar o Excel proporciona aos jovens aprendizes uma vantagem competitiva ao ingressar no mercado de trabalho, facilitando
            a execução de tarefas administrativas e financeiras com mais eficiência. Além disso, o Excel é essencial para criar relatórios
            detalhados, controlar despesas, elaborar planilhas avançadas e automatizar cálculos, tornando-se uma competência indispensável.
          </p>
        </div>

        {/* Cards de cursos */}
        <div className="courses-container">

          <div className="curso" onClick={handleExcelClick}>
            <h2>Santander Academy</h2>
            <p>
              Este curso é fornecido pela <strong>Santander Academy</strong> e tem como objetivo ensinar desde os conceitos básicos até as funcionalidades avançadas do Excel. 
              Ideal para quem deseja aprimorar suas habilidades em planilhas, funções e relatórios, tornando-se um profissional mais eficiente e preparado.
            </p>
            <ul>
              <li>
                <a
                  href="https://lms.santanderopenacademy.com/courses/273"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '18px', textDecoration: 'none', color: '#007bff' }}
                >
                  Acessar Curso de Excel Avançado
                </a>
              </li>
              {/* Aqui você pode adicionar outros links relevantes ao curso de Excel */}
            </ul>
          </div>

          <div className="curso" onClick={handleExcelClick}>
            <h2>Fundação Bradesco</h2>
            <p>
              Este curso é fornecido pela <strong>Fundação Bradesco</strong> e tem como objetivo ensinar desde os conceitos básicos até as funcionalidades avançadas do Excel. 
              Ideal para quem deseja aprimorar suas habilidades em planilhas, funções e relatórios, tornando-se um profissional mais eficiente e preparado.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.ev.org.br/cursos/microsoft-excel-2016-basico"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '18px', textDecoration: 'none', color: '#007bff' }}
                >
                  Acessar Curso de Excel 2016
                </a>
              </li>
              {/* Aqui você pode adicionar outros links relevantes ao curso de Excel */}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Excel;
