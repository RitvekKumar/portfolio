import React from 'react'

import { About, Header, Footer, Skill, Testimonials, Work} from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill /> 
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App