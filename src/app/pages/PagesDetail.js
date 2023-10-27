import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";
import {
  decrementQuantity,
  incrementQuantity,removeFromcart
} from "../componentSlice/cartSlice";

const PagesDeatail = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [tqty, settQty] = useState('');
  const handlePrice=()=>{
    // settQty(qty*)
  }

  return (
    <div>
      <Navbar />
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <div key={index}>
            <li style={{ listStyle: "none" }}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={item.image}
                alt={item.title}
              />
            </li>
            <li style={{ listStyle: "none" }} key={index}>
              {item.title}
            </li>
            <li style={{ listStyle: "none" }} key={index}>
              {item.price *qty}
            </li>
            <li style={{ listStyle: "none" }} key={index}>
              {item.category}
            </li>
            <li style={{ listStyle: "none" }} key={index}>
              Quantity: {qty}
              <button
                onClick={() => setQty(qty + 1)}
                // onClick={() =>{ dispatch(incrementQuantity(item))}}
                style={{ backgroundColor: "yellow" }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                // onClick={() => dispatch(decrementQuantity(item))}
                style={{ backgroundColor: "yellow" }}
              >
                -
              </button>
            <button onClick={()=>dispatch(removeFromcart(item))}  style={{ backgroundColor: "red",width:"80px",height:"40px",border:"none",borderRadius:"5%",marginLeft:"150px",fontWeight:"bold" }}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PagesDeatail;
