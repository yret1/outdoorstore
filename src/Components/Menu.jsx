import MenuImg from "../assets/Menu.svg"
import "../Styles/Menu.css"

import { Link } from "react-router-dom"

import Home from "../assets/Home.svg"
import About from    "../assets/About.svg"
import Contact from "../assets/Contact.svg"
import Shop from "../assets/Shop.svg"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"


const DropDownItem = (props) => {

    return (
        <li className="dropdown__item">
           <Link className="dropdown__item" to={props.path}> 
                <img className="dropdown__img" src={props.img} alt="Menu option" />
                <p className="dropdown__text">{props.text}</p>
            </Link>
        </li>
        )

    
}

const Menu = () => {

    const menuRef = useRef()
    const menuTriggerRef = useRef();

    const [open,setOpen] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
          if (!menuRef.current.contains(e.target) && !menuTriggerRef.current.contains(e.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    const handleClick = () => {
        setOpen(prevOpen => !prevOpen);
      };



    return (
        <section className="menu">
            
            <div className="menu__trigger" ref={menuTriggerRef} onClick={handleClick}>
                <img src={MenuImg} alt="Menu" />
            </div>

            <div className={`menu__dropdown ${open ? "open" : "closed"}`} ref={menuRef}>
                <h3>Menu</h3>
                <DropDownItem path={"/"} text={"Home"} img={Home} />
                <DropDownItem path={"/shop"} text={"Shop"} img={Shop} />
                <DropDownItem path={"/about"} text={"About"} img={About} />
                <DropDownItem path={"/contact"} text={"Contact"} img={Contact} />
            </div>

        </section>
    )
}



export default Menu