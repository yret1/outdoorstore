import Header from "../Header"
import { Link } from "react-router-dom"
import "/src/Styles/MainPage.css"
const HomePage = () => {

    return (
        <section className="mainpage">
            <Header />
            <figure className="mainpage__image">
                <p className="image__top">Take YOUR Step Into The Wilderness</p>
                <h1 className="image__head">Clothville</h1>
                <section className="mainpage__buttons">
                    <Link to="/shop">Shop</Link>
                </section>
            </figure>
        </section>
    )
}

export default HomePage