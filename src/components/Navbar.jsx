import { useSelector } from "react-redux";

export default function Navbar() {

  const cart=useSelector((state)=>state.cart);

  return (
    <div className="w-full h-[8%] bg-gradient-to-r from-cyan-500 to-blue-500 pt-2">
      <nav className="flex justify-between items-center text-white">
        <div className="ml-10">
          <h1 className="mr-52 text-2xl font-bold">Shopping Cart</h1>
        </div>
        <div className="flex gap-6 mr-10 items-center justify-items-end font-semibold">
          <button className="px-1 py-1 hover:bg-green-500 rounded-md text-xl font-semibold">
            Home
          </button>
          <div className="relative mr-3">
            <i className="ri-shopping-cart-fill text-2xl" />
            <span className="badge badge-sm indicator-item absolute rounded-full w-7 h-5 -mx-3 -my-3 bg-yellow-200 text-black">
              <h1 className="mx-2 -my-1">
                {
                  cart.filter((item)=>item.quantity>0).length
                }
              </h1>
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 overflow-hidden">
            <img
              className="object-cover"
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
