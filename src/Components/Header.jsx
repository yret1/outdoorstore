import "../Styles/Header.css"
import { Link } from "react-router-dom"
import Cart from "../assets/Cart.svg"
import CurrentCart from "./CurrentCart"
import Menu from "./Menu"

const Header = () => {

    return (
        <header className="header">
            <Menu />
            <Link to="/">Clothville</Link>
            <CurrentCart />
        </header>
    )
}

export default Header