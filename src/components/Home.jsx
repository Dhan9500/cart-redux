import { useSelector } from "react-redux";
import AddProducts from "./AddProducts";
import Product from "./Product";
import NoProducts from "./NoProducts";

export default function Home() {
  const products = useSelector((state) => state.products);
  const productLen= products.length;
  console.log(productLen);
  return (
    <div className="container px-5 mx-auto w-full h-[92%] flex pt-10">
      <div className="container mx-9 p-2 h-full w-full overflow-auto max-w-[98%] max-h-[90%] flex-wrap justify-center items-start flex gap-3 rounded-md ">
      {
        productLen===0?<NoProducts/>:products.map((items,index)=><Product key={index} item={items}/>
        )
      }
      </div>
      <div className="container h-[92%] w-[30%] flex justify-end">
        <AddProducts />
      </div>
    </div>
  );
}
