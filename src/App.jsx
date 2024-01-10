import { useState, useEffect } from 'react'

import HomePage from "./Components/Pages/HomePage.jsx"
import Shop from './Components/Pages/Shop.jsx'
import Contact from './Components/Pages/Contact.jsx'
import About from './Components/Pages/About.jsx'


import './App.css'
import "./Styles/transitions.css"
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence,motion} from 'framer-motion'

function App() {

  const location = useLocation();
  const [products, setProducts] = useState([])
  const [currentInCart, setCurrentInCart] = useState([]);


  


useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        setProducts(data)
        
    })


},[])

  return (

      <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
            <HomePage currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} />
              <motion.div
            className="slide-in"
            initial={{scaleY: 0}} 
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}
            transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
            />

            <motion.div 
            className="slide-out"
            initial={{scaleY: 1}} 
            animate={{scaleY: 0}}
            exit={{scaleY: 0}}
            transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
            />
                </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
         
              <Shop currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} products={products} />
                <motion.div
              className="slide-in"
              initial={{scaleY: 0}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 1}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
  
              <motion.div 
              className="slide-out"
              initial={{scaleY: 1}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 0}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
                  </>
            }
          />
          <Route
            path="/about"
            element={
              <>
              <About currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} />
                <motion.div
              className="slide-in"
              initial={{scaleY: 0}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 1}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
  
              <motion.div 
              className="slide-out"
              initial={{scaleY: 1}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 0}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
                  </>
            }
        
          />
          <Route
            path="/contact"
            element={
              <>
             <Contact currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} />
             
                <motion.div
              className="slide-in"
              initial={{scaleY: 0}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 1}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
  
              <motion.div 
              className="slide-out"
              initial={{scaleY: 1}} 
              animate={{scaleY: 0}}
              exit={{scaleY: 0}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}} 
              />
                  </>
            }
          />
        </Routes>
      </AnimatePresence>
      </>

  )
}

export default App
