import { useState, useEffect, useRef } from "react"

import CartImg from "../assets/Cart.svg"

import "../Styles/Cart.css"


const CartItem = (props) => {

    const {deleteItem, id} = props




    return (
        <li id={id} className="cart__item">
            <article className="product">
                <img className="cart__image" src={props.image} alt="Product image" />
                <button onClick={() => deleteItem(id)}>Remove</button>
                <div className="details">
                <p className="cart__name">{props.name}</p>
                <p className="cart__price">${props.price}</p>
                </div>
            </article>
        </li>
    )
}


const CurrentCart = (props) => {

    const {current, setCurrent} = props;

    const cartRef = useRef();

    const [open, setOpen] = useState(false);

    const [total, setTotal] = useState(0);


    useEffect(() => {

        let handler = (e) => {
           if(!cartRef.current.contains(e.target)){
            setOpen(false)
           }
        }
        
        document.addEventListener("mousedown", handler )
    })



    useEffect(() => {

         if(current) {
            const totalValue = current.reduce((accumulator, item) => accumulator + item.price, 0);
            setTotal(totalValue)
         }

         console.log(current)
    },[current])

    const removeItem = (itemId) => {
        console.log(itemId)
        console.log("deleted")

        setCurrent((prevCart) => prevCart.filter((item) => item.id !== itemId));
      };



    return (
        <section className="cart">

            <div className="cart__trigger" onClick={()=> setOpen(!open)}>
                <img src={CartImg} alt="Cart Button" />
            </div>

            <div className={`show__cart ${open ? "open" : "closed"}`} ref={cartRef}>
                <section>
                    <button onClick={()=> setOpen(!open)}>Close</button>
                </section>
                <h3>Your Cart</h3>
                {current ? (
                    current.map((item) => (
                    <CartItem key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} deleteItem={removeItem} />
                    ))
                ) : (
                    null
                )}
                <div className="total">
                    <p>Total:</p>
                    <p>${total}</p>
                 </div>
            </div>

        </section>
    )
    
}

export default CurrentCart