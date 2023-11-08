import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Result from "./pages/Result";

function App() {
  console.log("Rendering App")
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
