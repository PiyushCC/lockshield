import Blog from 'components/Blog';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Milestones from 'components/Milestones';
import Portfolio from 'components/Portfolio';
import Pricing from 'components/Pricing';
import ScrollToTop from 'components/ScrollToTop';
import Services from 'components/Services';
import Skills from 'components/Skills';
import Testimonials from 'components/Testimonials';
import Video from 'components/Video';
import Navbar from 'components/Navbar';
import { motion } from 'framer-motion';
import React from 'react';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import App from 'App';

function Land() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default Land