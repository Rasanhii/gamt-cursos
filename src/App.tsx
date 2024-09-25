import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/homepage/homepage';

function App() {

  return (
    <BrowserRouter basename='/gamt-cursos'>
      <Routes>
        <Route path = "/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
