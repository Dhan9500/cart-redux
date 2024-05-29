import { useSelector } from "react-redux";
export default function ShowCart() {
  const carts = useSelector((state) => state.cart);

  return (
    <div>
      {carts.map((item,index) => (
        <div key={index} className="flex gap-2">
          <h1>{item.name}</h1>
          <h1>{item.quantity}</h1>
        </div>
      ))}
    </div>
  );
}
