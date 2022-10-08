import {AiFillPlusCircle , AiOutlineClose , AiFillMinusCircle} from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const UiCart = ({image , title , price , quantity , count , rate,  addHandler , removeHandler }) => {
  return (
    <div>
      <div className="bg-white flex justify-between p-4 rounded-lg shadow-sm mb-2 ">
        <div className="flex items-center">
          <div className="w-20">
            <img src={image} alt="" className="w-full h-auto"/>
          </div>
          <div className="pl-3">
            <div className="mb-2 font-bold text-slate-800 md:from-neutral-800">{title}</div>
            <div className="text-blue-500 font-bold mt-2">price: {price} $</div>
            <div className="text-slate-800 font-bold mt-2">sold: {count}</div>
            <div className="text-blue-500 font-bold mt-2"><ReactStars value={rate} size="20" edit={false}/></div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          {/* close product */}
          <button>
            <AiOutlineClose onClick={removeHandler} className="text-blue-500"/>
          </button>
          {/* increse and decrese product */}
          <div className="flex items-center mb-3 gap-2">
            <button onClick={addHandler}>
              <AiFillPlusCircle />
            </button>
            <div>{quantity}</div>
            <button onClick={removeHandler}>
              <AiFillMinusCircle />
            </button>
          </div>
        </div>
      </div>
      <hr ></hr>
    </div>
  );
};

export default UiCart;
