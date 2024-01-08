import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/login.css';
function Login() {
  const [logindata, setData] = useState([]);

  useEffect(() => {
    axios.get('https://7t7rw6av2l.execute-api.us-east-1.amazonaws.com/dev/api/logindata')
      .then((response) => {
        console.log('Data received:', response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='login-page-main'>
     
    <div className="container mt-4">
      {logindata.map((item) => (
        <div key={item._id} >
  
    <div className="login-page">
      <div className="log-in-main">
        <div className="log-in-main-div1">
        <img  className="login-robo-img" src={`data:image/jpg;base64, ${item.bot_img}`} alt="banner_img" />
        </div>
        <div className="log-in-main-div2">
          <div className="welcome-back-div">
            <p>{item.welcome_text}</p>
          </div>
          <form className="login-form">
            <div>
            <img  src={`data:image/jpg;base64, ${item.building_icon}`} alt="banner_img" />
              <input type="text" placeholder="Company Name"></input>
            </div>
            <div>
            <img  src={`data:image/jpg;base64, ${item.person_icon}`} alt="banner_img" />
              <input type="text" placeholder="User Name"></input>
            </div>
            <div>
            <img  src={`data:image/jpg;base64, ${item.pwd_icon}`} alt="banner_img" />
              <input type="password" placeholder="Enter Password"></input>
            </div>
            <div className="login-submit-button">
              <input type="submit" value={item.login}></input>
              {/* <img  src={`data:image/jpg;base64, ${item.bot_icon}`} alt="banner_img" /> */}
            </div>
          </form>
          <a className="forgot-pws" href="/">{item.forgot_pwd}</a>
        </div>
      </div>
    </div>

 
      
        </div>
      ))}
    </div>
   </div>
  );
}

export default Login;
