import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './general/navbar'
import Footer from './general/footer'
import Cards from './principal/cards'
import Slider from './principal/slider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Slider />
    <Cards />
    <Footer />
  </StrictMode>,
)
