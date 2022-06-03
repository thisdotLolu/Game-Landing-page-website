import './App.css';
import Home from './component/Home';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import Agents from './component/Agents';
import Info from './component/Info';
import GamePlay from './component/GamePlay';
import Maps from './component/Maps';
import Stories from './component/Stories';
import News from './component/News';


function App() {
  return (
    <div className='App'>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/gameplay' element={<GamePlay/>}/>
        <Route path='/maps' element={<Maps/>}/>
        <Route path='/stories' element={<Stories/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
