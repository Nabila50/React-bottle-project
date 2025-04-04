import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  //   to declare the useState need a eventhandler

  const handleAddToCart = (bottle) => {
    console.log("bottle will be added to the cart", bottle);
  };
  // console.log(bottles);
  retur (
    <div>
      <h3>Bottles: {bottles.length}</h3>

      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
