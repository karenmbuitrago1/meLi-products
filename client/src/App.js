import { Routes, Route } from "react-router-dom";
// Estilos
import '../src/styles/base/App.scss';
import ListProducts from "./components/ListProducts";

// Main Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
// import SearchNuevo from "./pages/searchList";
// import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className='App'>
      <Home/>
      <Routes>
        <Route path='/items?search' element={<ListProducts />} />
        <Route path='/items/:id' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
