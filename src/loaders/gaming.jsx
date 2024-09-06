import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Navbar from '../general/navbar.jsx';
import Footer from '../general/footer.jsx';
import Gamingprod from './general/gamingprod.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Gamingprod />
  <Footer />
</StrictMode>,
  )