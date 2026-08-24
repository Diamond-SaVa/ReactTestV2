import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import heroImg from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = "/react-test-v2";

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/ReactTestV2">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>,
  <StrictMode>
    <App />
  </StrictMode>,
)
