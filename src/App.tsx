import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Conditions } from './pages/Conditions'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Payment } from './pages/Payment'
import { Delivery } from './pages/Delivery'
import { Services } from './pages/Services'
import { Recommendations } from './pages/Recommendations'
import { NotFound } from './pages/404'
import { Catalog } from './pages/Catalog'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="*" element={<NotFound />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
