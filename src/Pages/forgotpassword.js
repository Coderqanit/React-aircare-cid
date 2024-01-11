import React from 'react'
import "../cssfile/forgotpassword.css"


const Forgotpassword = () => {
    
  return (
    <div>
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

      <section id="right-pa">
        <div class="all">
          <div class="welc">
            <h2>Welcome to Aircare</h2>
            <p>Forgot Password</p>
          </div>

          <div class="form">
            <form action="">
              <label for="">Email Address:</label>
              <br />
              <input type="text" placeholder="Enter Your Email Address" />
              <br />

              <button>Enter</button>
              <p>
                Redirect to{" "}
                <span>
                  <a href="signin.html">SignIn</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forgotpassword;
