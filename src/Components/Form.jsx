import "../Styles/Form.css";

import Github from "../assets/Github.svg";
import Linked from "../assets/Linkedin.svg";
const Form = () => {
    return (
        <section className="contactme">
            <section className="left">
                <div className="head">
                    <div className="socials">
                        <h3>My Platforms</h3>
                        <div className="social__platforms">
                            <a href="https://github.com/yret1" rel="noreferrer" target="_blank"><img src={Github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/simon-gustavsson-94b50090/" rel="noreferrer" target="_blank"><img src={Linked} alt="" /></a>
                        </div>
                        <h3>Contact Me</h3>
                    </div>
                </div>

                <form className="form" action="https://formkeep.com/f/32578217fb21"
                    acceptCharset="UTF-8"
                    encType="multipart/form-data"
                    method="POST">
                         <input type="hidden" name="utf8" value="✓"></input>

                    <fieldset>
                        <legend>Name</legend>
                    
                            <input className="inputbox" id="Full_Name" name="Full Name" type="text" placeholder="Name" required/>
                       
                    </fieldset>

                    <fieldset>
                        <legend>Email</legend>
                            <input className="inputbox" id="Email-address" name="Email" type="text" placeholder="Email" required/>
                    </fieldset>


                    <fieldset>
                        <legend>Message</legend>
                            <textarea className="inputbox" id="Message" name="Message" type="text" rows={7} placeholder="Message" required/>
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