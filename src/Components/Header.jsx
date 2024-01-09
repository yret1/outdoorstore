import "../Styles/Header.css"
import { Link } from "react-router-dom"
import Cart from "../assets/Cart.svg"
import CurrentCart from "./CurrentCart"
import Logo from "/src/assets/Logo.png"
import Menu from "./Menu"

const Header = (props) => {
    const {current, setCurrent} = props

    return (
        <header className="header">
            <Menu />
            <Link className="Logo" to="/"><img className="logo" src={Logo} alt="" /></Link>
            <CurrentCart current={current} setCurrent={setCurrent}  />
        </header>
    )
}

export default Header