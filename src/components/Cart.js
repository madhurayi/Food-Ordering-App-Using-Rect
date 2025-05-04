import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" w-1/2 m-auto">
        <button
          className="m-2 p-2 bg-green-600 text-white font-gilroy text-base font-semibold rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-gilroy">
            Cart Items are empty. Add items to the cart.
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
