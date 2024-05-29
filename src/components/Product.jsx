import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/Action";
import { decreseQTY, increaseQTY } from "../redux/products/Actions";

const Product = ({ itemp }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [qtyCheckPlus, setqtyCheckPlus] = useState(false);
  const [qtyCheckMinus, setqtyCheckMinus] = useState(false);

  const [addCart, setAddCart] = useState(false);
  useEffect(() => {
    cart.find((item) => {
      if (item.id === itemp.id) {
        if (item.quantity === 0) {
          console.log(item.quantity);
          setqtyCheckMinus(true);
          setAddCart(false);
          console.log("This is quantity check minus", qtyCheckMinus);
        }
      }
    });
    if (itemp.quantity === 0) {
      console.log("this is quantity check", itemp.id);
      setqtyCheckPlus(true);
      console.log("This is quantity check plus", qtyCheckPlus);
    }
  });

  const addToCartHandler = (itm) => {
    setAddCart(!addCart);
    setqtyCheckMinus(false);
    dispatch(addToCart(itm));
    dispatch(decreseQTY(itm));
  };
  const increaseQty = (itm) => {
    dispatch(addToCart(itm));
    dispatch(decreseQTY(itm));
  };
  const decreaseQty = (itm) => {
    dispatch(removeFromCart(itm));
    dispatch(increaseQTY(itm));
    setqtyCheckPlus(false);
  };

  return (
    <div className="w-[20rem] h-[22rem] rounded-xl overflow-hidden p-2 shadow-slate-700 border border-gray-100 shadow-md">
      <div className="h-[60%] overflow-hidden rounded-md relative">
        <img className="object-cover" src={itemp.imageurl} alt="" />
        <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {itemp.category}
        </span>
        <span
          className={`absolute ${qtyCheckPlus ? "" : "hidden"} top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-red-500`}
        >
          Out Of Stock
        </span>
        <span
          className={`absolute ${qtyCheckPlus ? "hidden" : ""} top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-green-500`}
        >
          {itemp.offer}
        </span>
      </div>
      <div>
        <h5 className="text-xl tracking-tight text-slate-900 mt-2 truncate hover:text-pretty">
          {itemp.name}
        </h5>
      </div>
      <div className="flex justify-between">
        <span className="text-xl font-bold text-slate-900">
          Price: {itemp.price}
        </span>
        <span className="text-xl font-bold text-slate-900">
          Qty: {itemp.quantity}
        </span>
      </div>
      <div className="flex justify-center items-center mt-5 w">
        <div className="flex gap-3">
          <button
            hidden={!addCart}
            disabled={qtyCheckMinus}
            className="bg-slate-800 hover:bg-slate-700 text-white p-2 w-7 rounded-full"
            onClick={() => decreaseQty(itemp)}
          >
            -
          </button>
          <button
            disabled={addCart}
            className={`rounded-xl p-2 ${qtyCheckPlus ? "bg-red-800" : "bg-slate-800 hover:bg-slate-700"}  text-white flex justify-center items-center font-semibold`}
            onClick={() => addToCartHandler(itemp)}
          >
            {addCart ? "Added To Cart" : "Add To Cart"}
          </button>
          <button
            hidden={!addCart}
            disabled={qtyCheckPlus}
            className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full"
            onClick={() => increaseQty(itemp)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
