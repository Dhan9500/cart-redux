import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/products/Actions";
const AddProducts = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm();
  const dispatch=useDispatch();
  const handle = () =>handleSubmit((data) => {
      dispatch(addProducts(data));
      // console.log(data);
      reset();
    });

  return (
    <div className="  shadow-slate-700 border border-gray-100 h-[68%] w-80 rounded shadow-md">
      <h4 className="flex justify-center text-black font-semibold text-xl shadow-slate-400 shadow-sm">
        Add New Products
      </h4>
      <form className="space-y-4 text-blue-500 bg-white border border-gray-400 shadow-slate-400 shadow-sm" onSubmit={handle()} autocomplete="off">
        <div className="flex flex-col px-4 ml-2 font-semibold text-black mt-1">
          <label>Product Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-[97%] h-8 rounded p-1 mt-2 mb-2 bg-slate-300 border border-gray-400 shadow-slate-400 shadow-sm"
          />
          <label>Category</label>
          <select
            className="w-[97%] h-8 rounded p-1 mt-2 mb-2 bg-slate-300 border border-gray-400 shadow-slate-400 shadow-sm"
            {...register("category", { required: true })}
          >
            <option className="italic font-semibold" value="">Select Category</option>
            <option className="italic font-semibold" value="clothing">Clothings</option>
            <option className="italic font-semibold" value="gadgets">Gadgets</option>
            <option className="italic font-semibold" value="bags">Bags</option>
          </select>
          <label>Image Url</label>
          <input
            {...register("imageurl", { required: true })}
            type="text"
            className="w-[97%] h-8 rounded p-1 mt-2 mb-2 bg-slate-300 border border-gray-400 shadow-slate-400 shadow-sm"
          />
          <div className="flex">
            <div>
              <label>Price</label>
              <input
                {...register("price", { required: true })}
                type="number"
                name="price"
                className="w-28 h-8 rounded p-1 mt-2 mb-2 bg-slate-300 border border-gray-400 shadow-slate-400 shadow-sm"
              />
            </div>
            <div className="ml-14">
              <label>Quantity</label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                name="quantity"
                className="w-[6.4rem] h-8 rounded p-1 mt-2 mb-2 bg-slate-300 border border-gray-400 shadow-slate-400 shadow-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            name="Add Products"
            className="px-1 py-1 bg-slate-800 hover:bg-slate-700  rounded-lg mb-2 font-semibold text-white"
          >
            Add Products
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProducts;
