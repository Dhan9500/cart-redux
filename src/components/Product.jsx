import React from "react";
import { useSelector } from "react-redux";

const Product = ({item}) => {
  return (
    <div className="w-[20rem] h-[22rem] rounded-xl overflow-hidden p-2 shadow-slate-700 border border-gray-100 shadow-md">
      <div className="h-[60%] overflow-hidden rounded-md relative">
        <img
          className="object-cover"
          src={item.imageurl}
          alt=""
        />
        <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {item.category}
        </span>
        <span className="absolute hidden top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          Offer
        </span>
      </div>
      <div>
        <h5 className="text-xl tracking-tight text-slate-900 mt-2">
          {item.name}
        </h5>
        
      </div>
      <div className="flex justify-between">
      <span className="text-xl font-bold text-slate-900">Price: {item.price}</span>
      <span className="text-xl font-bold text-slate-900">Qty: {item.quantity}</span>
      </div>
      <div className="flex justify-center items-center mt-5 w">
        <button className="rounded-xl p-2 bg-slate-800 text-white flex justify-center items-center hover:bg-slate-700 font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
