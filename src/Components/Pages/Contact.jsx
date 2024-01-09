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

                  <section className="form">
                    <h2 className="form__title">Send me a message</h2>
                    <form className="formy" action="https://public.herotofu.com/v1/2f9fb890-ae99-11ee-9dd2-c1caafee32ff" method="post" acceptCharset="UTF-8">
                    
                            <label htmlFor="name">
                                <input name="Name" id="name" type="text" required />
                            </label>
                            
                    
                            <label htmlFor="email">
                                <input name="Email" id="email" type="email" required  />
                            </label>
                            
                        <div>
                            <input type="submit" value="Send Email" />
                            <div  aria-hidden="true">
                            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                            </div>
                        </div>
                        </form>
                  </section>
                </section>
            </section>
        </>
    )
    
}

export default Contact