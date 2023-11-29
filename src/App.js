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
import {TemporaryDrawer} from './Components/Sidebar/TemporaryDrawer';

import { X } from './pages/X';

function App() {
  console.log("Rendering App")
  return (
    <Fragment>
    <TemporaryDrawer />
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="result" element={<Result />} />
          <Route path="morse" element={<MorseCode />} />
          <Route path="spreadsheet" element={<Spreadsheet />} />
          <Route path="x" element={<X />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
