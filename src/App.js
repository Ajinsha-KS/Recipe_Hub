import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Recipes from './Pages/Recipes';
import SingleRecipe from './Pages/SingleRecipe';
import Tips from './Pages/Tips';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Favourites from './Pages/Favourites';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipes/:id' element={<SingleRecipe />} />
      <Route path='/tips' element={<Tips />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/favourites' element={<Favourites />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
