import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Navbar from '../general/navbar.jsx';
import Footer from '../general/footer.jsx';
import Compoprod from './general/compoprod.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Compoprod />
  <Footer />
</StrictMode>,
  )