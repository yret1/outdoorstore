import "../Styles/Form.css";
const Form = () => {
    return (
        <section className="contactme">
            <section className="left">
                <div className="head">
                    <div className="socials">
                        <h3>My Platforms</h3>
                        <div className="social__platforms">
                            <a href="www.github.com/yret1"><i className="fab fa-github">SOCIAL  </i></a>
                            <a href="www.linkedin.com/simon"><i className="fab fa-linkedin">SOCIAL  </i></a>
                        </div>
                    </div>
                </div>

                <form className="form" action="">

                    <fieldset>
                        <legend>Name</legend>
                    
                            <input className="inputbox" type="text" placeholder="Name" />
                       
                    </fieldset>

                    <fieldset>
                        <legend>Email</legend>
                            <input className="inputbox" type="text" placeholder="Email" />
                    </fieldset>


                    <fieldset>
                        <legend>Message</legend>
                            <textarea className="inputbox" type="text" rows={7} placeholder="Message" />
                    </fieldset>


                        <button className="form__button">Send</button>
             
                </form>
            </section>
            <section className="right">

            </section>
        </section>
    )
}

export default Form