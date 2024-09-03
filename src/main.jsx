import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './general/navbar'
import Footer from './general/footer'
import Cards from './principal/cards'
import Slider from './principal/slider'
import Carousel from './principal/carousel'
import Carousels from './principal/carouselsec'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Slider />
    <Cards />
    <Carousel />
    <Carousels />
    <Footer />
  </StrictMode>,
)
