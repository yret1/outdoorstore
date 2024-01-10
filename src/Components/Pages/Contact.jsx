import Header from "../Header"
import Form from "../Form"
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

            

                  <section className="form">
                   <Form />
                  </section>
                </section>
            </section>
        </>
    )
    
}

export default Contact