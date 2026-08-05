import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;