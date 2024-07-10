import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    console.log(items);
    return (<div>
            
            {items.map(item=>
                <div key={item.card.info.id} className="p-2 m-2 border-b-[0.5px] border-gray-400 text-left flex justify-between">
                    <div className="w-9/12">

                        <div className="text-lg font-sans py-2">
                            <span >{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100}</span>
                        </div>
                        <p className="text-sm font-Gilroy ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 pl-4 ">
                        <div className="bg-white shadow-lg absolute text-lg font-bold mt-32 ml-8 rounded-lg px-7 py-1 hover:bg-gray-200">
                            <button className="text-green-600"> ADD </button>
                        </div>
                        <img src={CDN_URL+ item.card.info.imageId} className="w-10/12 rounded-lg" />
                        
                        
                    </div>
                </div>
                
            )}
            
         </div>
         );
}

export default ItemList;