import React from 'react'
import { useContext } from 'react'
import './Navbar.css'


import { CounterContext } from "../context/CounterContext";

const Navbar = ({ setShowCart }) => {

    const { clickedProducts } = useContext(CounterContext);



    let quantity = 0;

    clickedProducts.forEach(item => {
        quantity += item.qty;
    });

    

    return (
        <>
            <nav>

                <div className="logo">
                    <img src="/Aplazon-logo.png" width={'130px'} />
                </div>



                <div className="info">
                    <ul>
                        <li onClick={() => { setShowCart(false); setTimeout(() => document.getElementById("home").scrollIntoView({ behavior: "smooth" }), 0); }}>Home</li>

                        <li onClick={() => { setShowCart(false); setTimeout(() => document.getElementById("products").scrollIntoView({ behavior: "smooth" }), 0); }}>Products</li>

                        <li onClick={() => { setShowCart(false); setTimeout(() => document.getElementById("about").scrollIntoView({ behavior: "smooth" }), 0); }}>About us</li>

                        <li onClick={() => { setShowCart(false); setTimeout(() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" }), 0); }}>Contact us</li>

                    </ul>

                </div>

                <div className="cart">
                    <img src="/shopping-cart.png" alt="" width={'40px'} onClick={()=> setShowCart(true)} />

                    <span style={{ color: '#ffffffff', fontSize: '16px', fontWeight: '500' }}>{quantity}</span>

                </div>


            </nav>
        </>
    )
}

export default Navbar
