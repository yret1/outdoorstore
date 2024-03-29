import { useState, useEffect, useRef } from "react"
import Close from "/src/assets/Close.svg";
import CartImg from "../assets/Cart.svg"
import Trash from "/src/assets/Trash.svg"

import "../Styles/Cart.css"


const CartItem = (props) => {

    const {deleteItem, id, removeItem} = props




    return (
        <li id={id} className="cart__item">
            <article className="product">
                <img className="cart__image" src={props.image} alt="Product image" />
                <div className="details">
                <p className="cart__name">{props.name}</p>
                <div className="details__low">
                    <img src={Trash} onClick={() => deleteItem(id)}></img>
                    <p className="cart__price">${props.price}</p>
                </div>
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
        console.log(localStorage.getItem('inCart'));
        try {
          const savedCart = localStorage.getItem('inCart');
          if (savedCart !== undefined && savedCart !== null) {
            let inCart = JSON.parse(savedCart);
            setCurrent(inCart);
          }
        } catch (error) {
          // Handle error loading from localStorage
          console.error('Error loading cart data from localStorage:', error);
        }
      }, []);

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

            let roundend = Math.round(totalValue * 100) / 100;

            setTotal(roundend)
         }

         localStorage.setItem("inCart", JSON.stringify(current));
    },[current])

    const removeItem = (itemId) => {
        setCurrent((prevCart) => prevCart.filter((item) => item.id !== itemId));
      };


      const clickHandler = () => {
        setOpen(!open)
      }


    return (
        <section className="cart">

            <div className="cart__trigger" onClick={clickHandler}>
                <img src={CartImg} alt="Cart Button" />
                {current.length > 0 && (
                    <div className="cart__count">
                        <p className="count">{current.length}</p>
                        </div>
                )}
            </div>

            <div className={`show__cart ${open ? "open" : "closed"}`} ref={cartRef}>
                <section className="cart__header">
                    <h3>Your Cart</h3>
                    <img className="cart__close" src={Close} alt="Close Button" onClick={() => setOpen(!open)} />
                </section>
                
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