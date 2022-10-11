import { Routes, Route } from "react-router-dom";

// Estilos
import '../src/styles/base/App.scss';

// Main Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SearchNuevo from "./pages/searchNuevo";
// import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchNuevo />} />
        <Route path='/items/:id' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
