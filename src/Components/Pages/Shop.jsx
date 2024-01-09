import { useEffect, useState } from "react";
import Header from "../Header";
import Transition from "../../Styles/transition";

import "/src/Styles/Shop.css";
const Shop = (props) => {
    const {products, currentInCart, setCurrentInCart} = props;

    const [filteredProducts, setFilteredProducts] = useState(products);

    const [category, setCategory] = useState("All Products");



    const removeItem = (itemId) => {
        console.log(itemId)
        console.log("deleted")

        setCurrentInCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      };

      useEffect(() => {
        setCategory("All Products");
        setFilteredProducts(products);
      }, []);


    useEffect(() => {
        localStorage.setItem('inCart', JSON.stringify(currentInCart))
    },[currentInCart])

    const filter = (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === "men") {
            setCategory("For Men");
          const filtered = products.filter(
            (product) => product.category === "men's clothing"
          );
          setFilteredProducts(filtered);
        } else if (selectedCategory === "women") {
            setCategory("For Women");
          const filtered = products.filter(
            (product) => product.category === "women's clothing"
          );
          setFilteredProducts(filtered);
        } else if (selectedCategory === "electronics") {
            setCategory("Electronics");
          const filtered = products.filter(
            (product) => product.category === "electronics"
          );
          setFilteredProducts(filtered);
        } else if (selectedCategory === "jewellry") {
            setCategory("Jewellry");
          const filtered = products.filter(
            (product) => product.category === "jewelery"
          );
          setFilteredProducts(filtered);
        } else {
            setCategory("All Products");
          setFilteredProducts(products); // Reset to all products if no category selected
        }
      };



    const addToCart = (product) => {

        console.log("add to cart")

        setCurrentInCart((prev) => [...prev, product])

        console.log(localStorage.getItem('inCart'))
    }

    return (
        <section>
            <Header current={currentInCart} setCurrent={setCurrentInCart} />
            <section className="hero">
                <h1 className="hero__title">Shop</h1>

                <nav className="shop__nav">
                    <ul className="nav__screen">
                        <button onClick={filter} value={""} className="nav__item">All Items</button>
                        <button onClick={filter} value={"men"} className="nav__item">Men</button>
                        <button onClick={filter} value={"women"} className="nav__item">Women</button>
                        <button onClick={filter} value={"electronics"} className="nav__item">Electronics</button>
                        <button onClick={filter} value={"jewellry"} className="nav__item">Jewellry</button>
                    </ul>
                    <div className="nav__small">
                      <span>Categorys <i className="arrow down"></i></span>
                      <div className="dropdowns">
                      <button onClick={filter} value={""} className="nav__item">All Items</button>
                        <button onClick={filter} value={"men"} className="nav__item">Men</button>
                        <button onClick={filter} value={"women"} className="nav__item">Women</button>
                        <button onClick={filter} value={"electronics"} className="nav__item">Electronics</button>
                        <button onClick={filter} value={"jewellry"} className="nav__item">Jewellry</button>
                      </div>
                    </div>
                </nav>
            </section>
            <section className="filters">
                <h2>{category}</h2>
            </section>
           <section className="shop__grid">
            {filteredProducts.map(product => (
                <article key={product.id} className="grid__item">
                    <figure className="img__wrapper">
                        <img className="grid__image" src={product.image} alt="Product image" />
                    </figure>
                    <figcaption>
                        <h3>{product.title}</h3>
                        <section className="pricebox">
                            <p>${product.price}</p>
                            {currentInCart.includes(product) ? (
                                <button className="inCart button" onClick={()=> removeItem(product.id)}>Remove from cart</button>
                            ): (
                                <button onClick={()=> addToCart(product)} className="cart__button button">Add to cart</button>
                            )}
                        </section>
                    </figcaption>
                </article>
            ))}
           </section>
        </section>
    )
}


export default Shop