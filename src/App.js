
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import Addfavs from './addfavs';
import About from './about';
import Footer from './footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import State from './state';


function App() {
  let title = "Favourite Movies and Tv shows"
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/favourites' element={<Favourites data={title}/>}/>
           <Route path='/addfavs' element={<Addfavs/>}/>
           <Route path='/about' element={<About/>}/>
         </Routes>
         <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
