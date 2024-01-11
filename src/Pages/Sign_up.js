import React from 'react'
import "../cssfile/Sign-up.css"

const Sign_up = () => {
  return (
    <div className="sign-up">
    
        <section id="Signup">
          <div class="right">
            <div class="logo">
              <img src="./images/Logo.png" alt="" />
            </div>
          </div>

          <div class="left">
            <div class="frame">
              <img src="./images/main-frame.png" alt="" />
            </div>
          </div>
        </section>

        <section id="right">
          <div class="all">
            <div class="login">
              <p>
                Already have an account?
                <span>
                  <a href="SignUp.html">Sign In</a>
                </span>
              </p>
            </div>
            <div class="welc">
              <h2>Welcome to Aircare</h2>
              <p>Register for Aircare</p>
            </div>

            <div class="form">
              <form action="">
                <label for="">First Name:</label>
                <input type="text" placeholder="Enter Your Name" />

                <br />
                <label for=""> Last Name:</label>
                <input type="text" placeholder="Enter Your Name" />

                <br />
                <label for="">Email Address:</label>
                <input type="text" placeholder="Enter Your Email Address" />

                <br />
                <label for="">Password:</label>

                <input type="text" placeholder="Enter your Password" />
                <br />
                <label for="">Confirm Password:</label>

                <input type="text" placeholder="Confirm Password" />
                <br />
<p>By registering you accept our terms and conditions</p>
                <button onclick="confirmAction()">Register</button>
               
              </form>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Sign_up
