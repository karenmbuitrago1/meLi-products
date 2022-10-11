import { Routes, Route } from "react-router-dom";

// Estilos
import '../src/styles/base/App.scss';

// Main Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SearchNuevo from "./pages/searchList";
;

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SearchNuevo />} />
        <Route path='/items' element={<SearchNuevo />} />
        <Route path='/items/:id' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
