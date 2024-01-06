import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Shop from '../Components/Pages/Shop.jsx'
import HomePage from '../Components/Pages/HomePage.jsx'

const Router = () => {
    const [products, setProducts] = useState([])
    const [currentInCart, setCurrentInCart] = useState([]);

    


  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
          setProducts(data)
          
      })

      console.log(products)


  },[])

    const router = createBrowserRouter([
        {
          path: '/',
          element: <HomePage currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} />,
        },
        {
          path: '/shop',
          element: <Shop currentInCart={currentInCart} setCurrentInCart={setCurrentInCart} products={products} />
        }
      ])

      return <RouterProvider router={router} />
}

export default Router