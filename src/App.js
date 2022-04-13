import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS >>> ", user);

      if (user) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
         <Header />
      <div className="app">
        <Routes>
            <Route path="/Login" element={<Login /> } />
         
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        
        </Routes>
      </div>
    </Router>
  );
}
export default App;