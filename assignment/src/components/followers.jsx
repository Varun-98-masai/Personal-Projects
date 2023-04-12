import React, { useState } from 'react'
import "../styles/followers.css";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import logo from "../Cipher_logo.png"
import { Link } from 'react-router-dom';
const Followers = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloggedIn, setIsloggedIn] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/user/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token in headers
      },
      body: JSON.stringify({ email, password })
    });
   
    const data = await response.json();
    console.log(data);
    localStorage.setItem('token', data.token); // Store token in local storage
    setIsloggedIn(true);
  };
 if(isloggedIn) {
  return(
  <div className='container'>
      <div className='card'>
        <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User1</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User2</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User3</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User4</p>

        </div>
      </div>
      <div className='card'>
        <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User1</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User2</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User3</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User4</p>

        </div>
      </div>
      <div className='card'>
        <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User1</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User2</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User3</p>

        </div>
      </div>
      <div className='card'>
      <div className='image_card'>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" style={{width:"100%"}} />
        </div>
        <div className='info_card'>
          <p>User4</p>

        </div>
      </div>
     </div>
     )
  } else{
  return (
    <div className='followers' >
      <Modal size="md" isOpen={login} toggle={() => setLogin(!login)}>
        <ModalHeader toggle={() => setLogin(!login)}>
          <h4>SignIn</h4>
        </ModalHeader>
        <ModalBody>
          <div className="login_form">
            <div>
            <img src={logo} alt="cipherLogo.png" />
              <h4>Hey, Welcome!</h4>
              <p>Please provide your email and password to signin</p>
            </div>
           
            <div>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12}>
                    <div>
                     
                      <input
                      type="text" 
                      placeholder="Email Id" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                  </Col>
                  
                  <Col lg={12}>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Col>
                  
                </Row>
                
                <a href="/" style={{color:"orange",textDecoration:"none",textAlign:"right"}}>Forgot Password ?</a>
                <button
                  style={{
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
                  Sign In
                </button>
              </form>
              
               <p style={{textDecoration:"none",textAlign:"center"}}>Don't have an account ?
               <span>
                <Link to="/register" style={{color:"orange",textDecoration:"none",textAlign:"center"}}> Get Started</Link>
               </span>
               </p>
             
            </div>
          </div>
        </ModalBody>
      </Modal>
     <img src="https://www.cipherschools.com/static/media/Void.40a74afe85f5039b8995becfc0e66c6a.svg" alt=""  />
    
        <button  onClick={() => setLogin(true)}>Sign In to Proceed</button>
    </div>
  
  )
 }
}

export default Followers;