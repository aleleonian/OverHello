import './App.css';
import { Footer } from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Footer />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
