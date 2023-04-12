import React from 'react'
import logo from "../Cipher_logo.png";
import "../styles/register.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
   

        const handleRegistration =  (event) => {
          event.preventDefault();
        //   console.log("event: ", event.target.firstName.value);
          const data = {
            name: event.target.firstName.value + " " + event.target.lastName.value,
            // lastName: 
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
          };
          const config = {
            headers: {
              'Content-Type': 'application/json',
            //   'Authorization': 
            },
            method: 'post',
            url: 'http://localhost:5000/api/user/registerUser',
            data: JSON.stringify(data)
          };
           axios(config)
            .then((response) => {
            //    const data1 =  await response.json();
               console.log(response);
               const token = response.data.token;
               console.log(token);
               localStorage.setItem('token', token);
              
               
               
              // Handle the success response
            })
            .catch(error => {
              console.log(error);
              // Handle the error response
            });
        };
   
   
  return (
    <div className='register_container'>
        <div>
            <img src={logo} alt="" className='logo' />
        </div>
        <div className='form_container'>
            <form onSubmit={handleRegistration} action="">
                <input type="text" name='firstName' placeholder='First Name' />
                <input type="text" name="lastName" placeholder='Last Name' />
                <input type="text" name='email' placeholder='Email Address' />
                <input type="text" name='phone' placeholder='Phone No. (Optional)' />
                <input type="password" name='password' placeholder='Password' />
                <Link to="/followers"> 
                <button style={{
                    color: "white",
                    backgroundColor: "orange",
                    padding: "8px",
                    border: "none",
                    borderRadius: "14px",
                    width:"100%",
                    marginBottom:"30px"
                  }}
                  type="submit"
                  >
                    Register
                  </button>
                  </Link>
            </form>
        </div>
    </div>
  )
}

export default Register