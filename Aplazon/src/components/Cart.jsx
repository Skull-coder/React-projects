import {  useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";
import "./Cart.css";

const Cart = () => {
    const { clickedProducts, setClickedProducts } = useContext(CounterContext);
    const [buttonText, setButtonText] = useState('Proceed to payment')
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: "#007bff", // initial color (blue)
        color: "white",
    });



        const handleClick = () => {
            setButtonText("Processing...");
            setButtonStyle({ backgroundColor: "yellow", color: "black" });

            // Step 2: After 1 sec, show success
            setTimeout(() => {
                setButtonText("Success");
                setButtonStyle({ backgroundColor: "#00ff37ff", color: "Black" });

                // Step 3: After 1 sec, reset (simulate reload)
                setTimeout(() => {
                    
                    window.location.reload(); // optional reload
                }, 2000);
            }, 1000);

        }
        



        
        

        

    

    const handleIncrease = (id) => {
        setClickedProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
        );
    };

    const handleDecrease = (id) => {
        setClickedProducts((prev) =>
            prev.map((p) =>
                p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
            )
        );
    };

    const handleDelete = (id) => {
        setClickedProducts((prev) => prev.filter((p) => p.id !== id));
    };

    let totalAmount = 0;

    clickedProducts.forEach(item => {

        totalAmount += (item.qty) * (item.price);
    });



    return (
        <>
            {clickedProducts.length !== 0 ?

                <ul>
                    {clickedProducts.map((item) => (
                        <div className="cartItems" key={item.id}>
                            <div className="display">
                                <span className="discountPercentage">
                                    {item.discountPercentage}% off
                                </span>
                                <img src={item.thumbnail} alt={item.title} />
                                <span className="rating">{item.rating} ⭐</span>
                            </div>

                            <div className="product_box">
                                <div className="info">
                                    <h2>{item.title}</h2>
                                    <h3>Price: ${item.price}</h3>
                                    <p>{item.description}</p>
                                </div>

                                <div>
                                    <div className="productAmount">
                                        <img
                                            src="./minus.png"
                                            width={"20px"}
                                            onClick={() => handleDecrease(item.id)}
                                        />
                                        <span>{item.qty}</span>
                                        <img
                                            src="./plus.png"
                                            width={"20px"}
                                            onClick={() => handleIncrease(item.id)}
                                        />
                                    </div>

                                    <div className="deleteproduct">
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    ))}

                    {clickedProducts.length !== 0 &&
                        <div className="checkout">
                            <h1>Checkout Summary</h1>

                            <div className="amount">
                                <p>Here’s the total cost of your selected items:</p>

                                <h2>${totalAmount.toFixed(2)}</h2>
                            </div>

                            <p style={{ fontSize: "18px", color: "#555" }}>
                                *Taxes and delivery charges (if any) will be calculated at the next step.
                            </p>

                            <button className="proceedBtn" style={buttonStyle} onClick={handleClick}



                            >
                                {buttonText}
                            </button>
                        </div>
                    }


                </ul>

                :

                <div className="cartItems">
                    <h1>Please add products to your cart!!</h1>
                </div>

            }
        </>
    );
};

export default Cart;
