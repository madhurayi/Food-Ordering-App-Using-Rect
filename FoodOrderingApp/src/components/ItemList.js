import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="my-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[0.5px] border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-lg font-sans py-2 flex flex-col">
              <span>{item.card.info.name}</span>
              <span>₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-sm font-Gilroy truncate  ">
              {item.card.info.description}
            </p>
          </div>
          <div class="relative mb-5">
            {item.card.info && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                class="w-44 h-36 rounded-2xl"
              />
            )}
            <button
              onClick={() => handleAddItem(item)}
              class="absolute w-24 -bottom-3 border-gray-200 border-[2px] border-solid font-bold text-xl left-12 bg-white text-[#1ba672] px-4 py-1 rounded hover:bg-gray-100"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
