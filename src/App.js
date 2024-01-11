import React from 'react'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Request from "./Pages/CreateRequest"
import Home from "./Pages/Home"
import Navbar  from "./Pages/Navbar"
import Notification  from "./Pages/Notification"
import Pagenotfound  from "./Pages/Pagenotfound"
import Setting  from "./Pages/Setting"
import Log_out from "./Pages/Log_out"
import Sign from "./Pages/Sign"
import Signup from "./Pages/Sign_up"
import Forgotpassword from "./Pages/forgotpassword"


const App = () => {
  return (
    
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={Home}  />
          <Route path="/request" Component={Request} />
          <Route path="/notification" Component={Notification} />
          <Route path="/logout" Component={Log_out} />
          <Route path="setting" Component={Setting} />
          <Route path="*" Component={Pagenotfound} />
          <Route path="/sign" Component={Sign} />
          <Route path="/signup" Component={Signup} />
          <Route path="/forgotpassword" Component={Forgotpassword} />
        </Routes>
      </Router>
  );
  
}

export default App
