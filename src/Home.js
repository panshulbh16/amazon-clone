import { RedeemOutlined } from '@mui/icons-material';
import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
            className='home_image'
            src="https://m.media-amazon.com/images/I/71cyLrC6+mL._SX3000_.jpg" alt="" />
            
         <div className='home_row'>
         <Product 
         id = "222"
         title='Redmi Note 11' price={120.99}
          image={"redmi.jpg"}
          rating={5}
          />
        <Product
        id="111"
           title='2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Silver'
            price={2405}
            image={"https://m.media-amazon.com/images/I/61cCf94xIEL._AC_SX679_.jpg"}
             rating={5}/>
                </div>

            
         <div className='home_row'>
         <Product
         id="333"
         title='2021 Apple 11-inch iPad Pro (Wi‑Fi, 128GB) - Silver'
          price={800}
          image={"https://m.media-amazon.com/images/I/81MF389-9gS._AC_SX679_.jpg"}
          rating={4}/>
        
        <Product 
            id="444"        
        title='Quiet Ultrasonic Humidifiers for Bedroom'
         price={29.95}
          image={"https://m.media-amazon.com/images/I/81nWwfK5wxL._AC_SX679_.jpg"}
          rating={5}/>
        <Product
        id="555"
         title='New Balance Mens V3 Trail Running Shoes' 
        price={58.99}
          image={"https://m.media-amazon.com/images/I/81UcrwrbvgL._AC_UX695_.jpg"}
          rating={5}/>
        </div>


        <div className='home_row'>
        <Product 
        id="666"
        title='Black Disposable Face Masks, 100 Pack Black Face Masks 3 Ply Filter Protection' 
            price={8.99}
          image={"https://images-na.ssl-images-amazon.com/images/I/71FIeKwQ40L._AC_UL906_SR906,600_.jpg"}
          rating={5}/>
        <Product 
        id="777"
        title='SAMSUNG T7 Touch Portable SSD 1TB - Up to 1050MB/s - USB 3.2 External Solid State Drive, Black (MU-PC1T0K/WW)'
         price={104}
          image={"https://m.media-amazon.com/images/I/81Aa5WstcPL._AC_SX679_.jpg"}
          rating={5}/>
        </div>


        <div className='home_row'>
           
        <Product
         title =  'Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)'
         price={1094.45} 
          image={"https://m.media-amazon.com/images/I/71it2biogSS._SX679_.jpg"}
          rating={5}/>
        </div>
   </div>
   </div>
     
  )
}

export default Home