import React from 'react'
import "../cssfile/sign.css"

const Sign = () => {
  return (
    <div className="sign-in">
      <section id="cut">
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

      <section id="right-in">
        <div class="all">
          <div class="login">
            <p>
              Are you new to Aircare?
              <span>
                <a href="SignUp.html">Sign Up</a>
              </span>
            </p>
          </div>
          <div class="welc">
            <h2>Welcome to Aircare</h2>
            <p>Log In for Aircare</p>
          </div>

          <div class="form">
            <form action="">
              <label for="">Email Address:</label>
              <input type="text" placeholder="Enter Your Email Address" />

              <br />
              <label for="">Password:</label>

              <input type="text" placeholder="Enter your Password" />
              <br />

              <button onclick="confirmAction()">Log In</button>
              <p>
                Forgot Password?
                <span>
                  <a href="forgotpassword.html"> Click Here</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sign
