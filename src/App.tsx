import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage/homepage';
import Navbar from './components/Navbar/navbar';
import Excel from './pages/excel/excel';

function App() {
  return (
    <BrowserRouter basename='/gamt-cursos'>
      <Navbar /> {/* Aqui adicionamos o Navbar */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/excel" element={<Excel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
