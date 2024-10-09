import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage/homepage';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <BrowserRouter basename='/gamt-cursos'>
      <Navbar /> {/* Aqui adicionamos o Navbar */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
