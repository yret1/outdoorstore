import "../Styles/Header.css"
import { Link } from "react-router-dom"
import Cart from "../assets/Cart.svg"
import CurrentCart from "./CurrentCart"
import Menu from "./Menu"

const Header = (props) => {
    const {current, setCurrent} = props

    return (
        <header className="header">
            <Menu />
            <CurrentCart current={current} setCurrent={setCurrent}  />
        </header>
    )
}

export default Header