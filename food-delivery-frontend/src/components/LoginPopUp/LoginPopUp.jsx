import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import axios from 'axios';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    address: "",
    user_type: ""
  })
  const { username, email, password, phoneNo, address,
    user_type } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      phoneNo,
      address,
      user_type
    };
    console.log("form submitted")
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register/', newUser);
      console.log(res.data);
      // You can handle success here, e.g., redirect to login or show a success message
    } catch (err) {
      console.error(err.response.data);
      // Handle errors here, e.g., show error messages
    }
  };
  return (
    <div className='login-popup'>
      <form  onSubmit={onSubmit} className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => { setShowLogin(false) }} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <div>
            <input name="username" type='text' placeholder='Your Username' value={username} onChange={onChange} required />
            <input name="email" type="email" placeholder='Your Email' value={email} onChange={onChange} required />
            <input name="password" type="password" placeholder='Password' value={password} onChange={onChange} required />
            <input name="phoneNo" type="number" placeholder='Your Phone no.' value={phoneNo} onChange={onChange} required />
            <input name="address" type="text" placeholder='address' value={address} onChange={onChange} required />
            <input name="user_type" type="text" placeholder='User Type' value={user_type} onChange={onChange} required /></div>}        </div>
        <button type="submit">{currState == "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
        {currState === "Login" ? <p>Create a new Account?<span onClick={() => setCurrState("Sign Up")}>Click here</span> </p> :
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>

        }
      </form>
    </div>
  )
}

export default LoginPopUp
