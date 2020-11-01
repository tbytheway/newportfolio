import React from 'react'

import "../style/contact.scss" 

const Contact = () => {
    return(
        <div className="contact-wrapper">
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <h3>Let's build something special together</h3>
            </div>
            <div className="form-wrapper">
                <div>
                    <form>
                        <label className="form-field">
                            <div>Name</div>
                            <div><input type="text" name="name" placeholder="Your Name" /></div>
                        </label> 
                        <label className="form-field">
                            <div>Email Address</div>
                            <div><input type="email" name="name" placeholder="Your Email Address" /></div>
                        </label>
                        <label className="form-message">
                           <div> Message</div>
                            <div><input type="text" name="name" /></div>
                        </label>
                    </form>    
                </div>

            </div>
        </div>
    )
}

export default Contact