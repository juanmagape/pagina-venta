import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Navbar from '../general/navbar.jsx';
import Footer from '../general/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Footer />
</StrictMode>,
  )