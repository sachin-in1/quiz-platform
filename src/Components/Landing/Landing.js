import React from "react";
import "../../Assets/css/landing/landing.css";

import SigninModal from "./Signin/SigninModal.js";
import SignupModal from "./Signup/SignupModal.js";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                
                <div className='center'>
                    <center>
                        Heading
                        <br />
                        <SigninModal /> &emsp;
                        <SignupModal />
                    </center>
                    
                </div>
            </div>
        );
    }
}