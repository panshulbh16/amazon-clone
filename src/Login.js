import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
    // some fancy firebase login stuff here
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  return (
    <div className ="login"> 
            <Link to= '/'> 
             <img 
                className ='login_logo'
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20220213013322"
             />
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value ={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5> 
                    <input type='password'  value ={password} onChange={e => setPassword(e.target.value)}  />
                    
                    <button type ='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon CLONE Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>
     </div>
  )
}

export default Login;