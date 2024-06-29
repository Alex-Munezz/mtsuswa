import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Hiking from './components/Hiking';
import Camping from './components/Camping';
import Cave from './components/Cave';
import Maasai from './components/Maasai';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Services/Hiking' element={< Hiking/>} />
        <Route path='/Services/Camping' element={< Camping/>} />
        <Route path='/Services/Cave' element={< Cave/>} />
        <Route path='/Services/Maasai' element={<Maasai />} />
        <Route path='/About' element={<About />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Booking' element={<Booking />} />
      </Routes>
    </div>
    </Router>
      );
}

export default App;
