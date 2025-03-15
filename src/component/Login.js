import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            login: false,
            token: null,
        }

    }
    loginn() {
        // fetch API 
        // console.warn("formdata",this.state);
        fetch("sfdgdf", {
            method: "POST",

        })
    }
    render() {
        return (
            <>
                <div class="about-hero-banner">
                    <div class="about-hero-text">
                        <h1>Join us for Healthy Envirnment</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
                            viverra leo.{""}
                        </p>
                    </div>
                </div>
                <div className='d-flex  my-5 justify-content-center'>
                    <input placeholder='Name' type='text' onChange={(event) => { this.setState({ email: event.target.value }) }}></input><br></br>
                    <input placeholder="password" type='Password' onChange={(event) => { this.setState({ password: event.target.value }) }}></input><br></br>
                    <button onClick={() => { this.loginn() }}>Login</button>

                </div>

            </>

        )
    }
}

export default Login