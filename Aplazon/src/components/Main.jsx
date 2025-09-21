import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import './Main.css'

const Main = ({setShowCart}) => {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { count, setCount, clickedProducts, setClickedProducts, products, setProducts } = useContext(CounterContext);

    const handleAddToCart = (product) => {
        // check if product already exists in cart
        const exists = clickedProducts.find(p => p.id === product.id);

        if (!exists) {
            setCount(count + 1);
            setClickedProducts((prev) => [...prev, { ...product, qty: 1 }]);
        }
    };

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const uniqueCategories = [
                    ...new Set(data.products.map(product => product.category))
                ];
                setCategories(uniqueCategories);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [setProducts]);

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <main>
            <section id="home">
                <div className="poster">
                    <img src="./public/Jupiter25_T1_Heder_PC_Prime_rec.jpg" alt="" width={'100%'} />
                </div>
            </section>

            <section id="products">
                <div className="categories">
                    <button onClick={() => setCategory("all")} style={{ border: category === 'all' ? '1px solid black' : '', fontWeight: category === 'all' ? '550' : '', background: category === 'all' ? '#ada4f7ff' : '' }}>All</button>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setCategory(cat)} style={{ border: category === cat ? '1px solid black' : '', fontWeight: category === cat ? '550' : '', background: category === cat ? '#ada4f7ff' : '' }}>
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <div className="grid">
                {filteredProducts.map(item => (
                    <div className="product" key={item.id}>
                        <div className="display">

                            <span className="discountPercentage">{item.discountPercentage}% off</span>
                            <img src={item.thumbnail} alt={item.title} />


                            <span className="rating">{item.rating} ⭐</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p className="price">
                            Price: <span className="original" style={{ textDecoration: 'line-through', color: '#565656ff' }}>${item.price}</span>
                            <span className="discounted" style={{ fontWeight: "bolder" }}>
                                ${((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}
                            </span>
                        </p>

                        <div className="order">
                            <button
                                onClick={() => handleAddToCart(item)}
                                disabled={clickedProducts.some(p => p.id === item.id)}
                                style={{ background: clickedProducts.some(p => p.id === item.id) ? '#09ff00ff' : '' }}
                            >
                                {clickedProducts.some(p => p.id === item.id) ? "Added" : "Add to Cart"}
                            </button>

                            <button onClick={()=> {setShowCart(true);
                                handleAddToCart(item);
                            }}>Order Now!</button>
                        </div>

                    </div>
                ))}
            </div>

            <section id="about">
                <h2>About Us</h2>
                <p>
                    Welcome to <strong>Aplazon</strong> — your one-stop shop for amazing deals!
                    We believe shopping should be fun, simple, and affordable.
                    From electronics to daily essentials, we bring you only the best, hand-picked products at unbeatable prices.
                </p>
                <p>
                    Our mission is to make your shopping experience smooth, secure, and enjoyable.
                    With exciting discounts, fast delivery, and reliable service, we’ve got everything covered for you!
                </p>
            </section>


            <section id="contact">
                <h2>Contact Us</h2>
                <p>Email: support@aplazon.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: Aplazon HQ, Amravati, Maharashtra, India</p>
                <p>&copy; 2025 Aplazon. All rights reserved.</p>
            </section>


        </main>
    );
};

export default Main;
