import { useState } from "react";
import Header from "../Header";
import "/src/Styles/Shop.css";
const Shop = (props) => {

    const {products} = props;
    const [currentInCart, setCurrentInCart] = useState([]);

    console.log(products)


    const addToCart = (product) => {

        console.log("add to cart")

        setCurrentInCart((prev) => [...prev, product])
    }

    return (
        <section>
            <Header current={currentInCart} setCurrent={setCurrentInCart} />
            <section className="hero">
                <h1 className="hero__title">Shop</h1>

                <nav className="shop__nav">
                    <ul>
                        <button className="nav__item">Men</button>
                        <button className="nav__item">Women</button>
                        <button className="nav__item">Electronics</button>
                        <button className="nav__item">Jewellry</button>
                    </ul>
                </nav>
            </section>
            <section className="filters">
                <h2>FILTERBOX</h2>
            </section>
           <section className="shop__grid">
            {products.map(product => (
                <article key={product.id} className="grid__item">
                    <figure className="img__wrapper">
                        <img className="grid__image" src={product.image} alt="Product image" />
                    </figure>
                    <figcaption>
                        <h3>{product.title}</h3>
                        <section className="pricebox">
                            <p>${product.price}</p>
                            <button onClick={()=> addToCart(product)} className="cart__button">Add to cart</button>
                        </section>
                    </figcaption>
                </article>
            ))}
           </section>
        </section>
    )
}
export default Shop