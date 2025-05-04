import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log(items);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const getCartItemCount = (id) => {
    const item = cartItems.filter((item) => item.card.info.id === id);
    console.log("entered remove item", id, cartItems, item);
    if (item) {
      return item.length;
    }
    return 0;
  };
  const handleRemoveItem = (id) => {
    const items = cartItems.find(
      (item) => item.card.info.id === id.card.info.id
    );
    console.log("items", items);

    if (items) {
      dispatch(removeItem(items));
    }
  };
  return (
    <div className="my-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[0.5px] border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-lg font-gilroy py-2 flex flex-col">
              <span className="font-gilroy font-bold">
                {item.card.info.name}
              </span>
              <span>₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-lg text-gray-600 font-gilroy truncate  ">
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
            {getCartItemCount(item.card.info.id) === 0 ? (
              <button
                onClick={() => handleAddItem(item)}
                class="absolute font-gilroy w-28 -bottom-3 border-gray-200 border-[2px] border-solid font-bold text-xl left-9 bg-white text-[#1ba672] px-4 py-1 rounded hover:bg-gray-100"
              >
                Add
              </button>
            ) : (
              <div class="absolute justify-between items-center flex flex-row font-gilroy w-28 -bottom-3 border-gray-200 border-[2px] border-solid font-bold text-xl left-9 bg-white text-[#1ba672] px-2 py-1 rounded hover:bg-gray-100">
                <button
                  onClick={() => handleRemoveItem(item)}
                  class=" text-[#1ba672]  hover:bg-gray-100"
                >
                  -
                </button>
                <span class=" text-[#1ba672]  hover:bg-gray-100">
                  {getCartItemCount(item.card.info.id)}
                </span>
                <button
                  onClick={() => handleAddItem(item)}
                  class=" text-[#1ba672]  hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
