import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage/homepage';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Excel from './pages/excel/excel';

function App() {
  return (
    <BrowserRouter basename='/gamt-cursos'>
      <Navbar /> 
      <div className="app-container">
        <Sidebar /> {/* Sidebar será renderizada em todas as páginas */}
        <div className="content-container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/excel" element={<Excel />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
