import { useState, useEffect, useRef } from "react"

import CartImg from "../assets/Cart.svg"


const cartItem = (props) => {

    return (
        <li className="cart__item">
            <article>
                <img className="cart__image" src={props.image} alt="Product image" />
                <div className="details">
                <p className="cart__name">{props.name}</p>
                <p className="cart__price">{props.price}</p>
                </div>
            </article>
        </li>
    )
}


const CurrentCart = (props) => {

    const {currentCart} = props;

    const cartRef = useRef();

    const [open, setOpen] = useState(false);

    const [total, setTotal] = useState(0);



    useEffect(() => {

         if(currentCart) {
            currentCart.forEach((item) => {
                setTotal(total + item.price)
            })
         }
    },[currentCart])



    return (
        <section className="cart">

            <div className={`cart__trigger ${open ? "open" : "closed"}`} onClick={()=> setOpen(!open)}>
                <img src={CartImg} alt="Cart Button" />
            </div>

            <div className="show__cart" ref={cartRef}>
                {currentCart ? (
                    currentCart.map((item) => (
                    <CartItem key={item.id} name={item.name} price={item.price} image={item.image} />
                    ))
                ) : (
                    null
                )}
            </div>

            <div className="total">
                <p>Total</p>
                <p>${total}</p>
            </div>
        </section>
    )
    
}

export default CurrentCart