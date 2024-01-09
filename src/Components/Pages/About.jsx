import "/src/Styles/About.css"
import Header from "../Header"
import Transition from "../../Styles/transition"
const About = (props) => {
    const { currentInCart, setCurrentInCart } = props
    
    return (
        <>
        <Header current={currentInCart} setCurrent={setCurrentInCart} />
        <section className="about">
            <section className="about__header">
                <h1> A BETTER FUTURE <br />
                FOR <br />
                THE PLANET AND YOU</h1>
            </section>
            <section className="about__story">
                <h2>Our Story</h2>

                <article className="about__card">
                    <figure className="card__image">
                        <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </figure>
                    <div className="card__text">
                        <h2>We only have one earth</h2>
                        <p>Our goal is to provide you with the best products.
                            All whilst leaving the smallest footprints.
                             A sustainabla choice for a sustainable future.
                        </p>
                    </div>
                </article>



                <article className="about__card--reverse">
                <div className="card__text">
                        <h2>We lost patience</h2>
                        <p>We got tired of other companies and products claiming to help the enviroment. So. We took it into our own hands!
                        </p>
                    </div>
                    <figure className="card__image">
                    <img src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </figure>
                </article>


                <article className="about__card">
                    <figure className="card__image">
                        <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </figure>
                    <div className="card__text">
                        <h2>We dont exist</h2>
                        <p>Our company actually doesnt exist. But we could.
                            This page was made by some guy named Simon.
                            Made on a cold night in Sweden during the first week of 2024. It was made with ReactJS.
                            You should head over to the contact page and send him a message.
                        </p>
                    </div>
                </article>
            </section>

        </section>
        </>
    )
}

export default About