import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./cart.css";
import { Link, Navigate, } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../componentSlice/cartSlice';

const ShowCart = () => {
  

    const [products, setProducts] = useState([]);

      const dispatch = useDispatch();
    //   const navigate = useNavigate();

   const handleClick = (product) => {
    dispatch(addToCart(product)); 
   
  };
 

  useEffect(() => {
    let a =async()=>{
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
      });
    }
    a()
 
  }, []);

  

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products.map((product, index) => (
            <div key={index}>
             
                <div
                  style={{
                    padding: "2rem",
                    overflow: "hidden",
                    width: "15rem",
                    //   backgroundColor: "#fff9ee",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px," +
                      "rgba(0, 0, 0, 0.3) 0px 30px 60px -30px," +
                      "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    height: "30rem",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <div style={{ width: "100%", height: "60%" }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={product.image}
                    />
                  </div>
                  <div style={{ height: "40%" }}>
                    <span
                      style={{
                        fontsize: "1.2rem",
                        fontweight: "bold",
                        marginbottom: "10px",
                        whitespace: "nowrap",
                        overflow: "hidden",
                        textoverflow: "ellipsis",
                      }}
                    >
                      {" "}
                      {product.title}
                    </span>
                    <div style={{ height: "40%" }}>
                      <div style={{ color: "gray", fontWeight: "bold" }}>
                        ₹{product.price}
                      </div>
                      <div style={{ color: "gray" }}>{product.category}</div>
                    </div>
                    <div>
                    
                        <Link to={'/pagesdetail'}>
                      <button
                        onClick={() => handleClick(product)}
                        style={{
                          position: "center",
                          width: "100%",
                          height: "35px",
                          backgroundColor: "yellow",
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          border: "none",
                          borderRadius: "10%",
                        }}
                      >
                        {" "}

                        ADD Cart
                      </button>
                        </Link>
                    </div>
                  </div>
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowCart;
