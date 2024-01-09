import Header from "../Header"

import "/src/Styles/Contact.css"
const Contact = (props) => {

    const {currentInCart, setCurrentInCart} = props


    return (
        <>
        <Header current={currentInCart} setCurrent={setCurrentInCart} />
        <section className="contact">
            <div className="hero__contact">
                <h1 className="contact__title">Get in touch</h1>
                <p className="contact__text">I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>

            <section className="contact__form">
                <div className="contact__head">
                <p className="contact__text--head">My socials</p>
                </div>

                <div className="socials">
                <a href="https://github.com/yret1" target="_blank" rel="noreferrer">
                    <div className="github clickable">
                        <h2>Github</h2>
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="Github" />
                      
                        <p>Go there!</p>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/simon-guillot/" target="_blank" rel="noreferrer">
                    <div className="linked clickable">
                        <h2>Linked In</h2>
                       <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="Linkedin" />
                        <p>Go there!</p>
                    </div>
                    </a>
                </div>
            </section>
        </section>
        </>
    )
    
}

export default Contact