import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NoPage } from "./pages/NoPage";
import { About } from "./pages/About";
import { Result } from "./pages/Result";
import { MorseCode } from "./pages/MorseCode";
import { Spreadsheet } from './pages/Spreadsheet';

function App() {
  console.log("Rendering App")
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="result" element={<Result />} />
          <Route path="morse" element={<MorseCode />} />
          <Route path="spreadsheet" element={<Spreadsheet />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Fragment>

    </BrowserRouter>
  );
}

export default App;
