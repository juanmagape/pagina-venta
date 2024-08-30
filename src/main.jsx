import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './general/navbar'
import Footer from './general/footer'
import Cards from './principal/cards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Cards />
    <Footer />
  </StrictMode>,
)
