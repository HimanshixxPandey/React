import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import List from './Components/List';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
        <Banner />
        <List />
        </>
      }/>
      <Route path='/favourites' element={<Favourite/>} />
    </Routes>
    </Router>
    

   

  );
}




export default App;
