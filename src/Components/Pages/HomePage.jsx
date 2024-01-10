import Header from "../Header"
import { Link } from "react-router-dom"
import "/src/Styles/MainPage.css"
const HomePage = (props) => {
    const { currentInCart, setCurrentInCart } = props

    // <Header current={currentInCart} setCurrent={setCurrentInCart} />
    return (
        <>
            <Header current={currentInCart} setCurrent={setCurrentInCart} />
            <section className="mainpage">
            <footer className="left__footer">
                        <p>Copyright ©yret1 2024. All Rights Reserved <a href="https://github.com/yret1"><button className="theButton">Go To github</button></a></p>
                    </footer>

                    <footer className="left__footer--mob">
                        <a href="https://github.com/yret1"><button className="theButton">Go To github</button></a>
                    </footer>
                
                <section className="mainpage__left">
                    <div className="left__header">
                        <h2>Clothville</h2>
                    </div>
                    <div className="left__body">
                        <div className="text">
                            <h1>Start Your <br />
                                Adventure</h1>
                        </div>
                        <div className="buttons">
                        <Link to="/shop"><button className="shop">Go To Shop</button></Link>
                        </div>
                    </div>

                </section>
                <section className="mainpage__right"></section>
            </section>
        </>
    )
}

export default HomePage