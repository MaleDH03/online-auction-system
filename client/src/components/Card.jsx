import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

/* eslint-disable react/prop-types */
const Card = ({
  auction_id,
  item_id,
  itemName,
  itemDescription,
  itemPostDate,
  itemStartDate,
  itemPrice,
  itemEndDate,
  itemPhoto,
  sellerName,
  itemCategory,
}) => {
  const handleTimeUp = () => {};

  return (
    <div className="max-w-md w-full mx-auto bg-[#3A2F5F] rounded-xl shadow-md overflow-hidden mb-6 hover:shadow-[#1E90FF]/50 transition-shadow duration-300">
      <div className="md:flex flex-col">
        <div className="w-full">
          <img
            className="h-48 w-full object-cover"
            src={
              itemPhoto ||
              "https://images.nobroker.in/images/8a9f92838c14fea9018c164ceec204bc/8a9f92838c14fea9018c164ceec204bc_88172_940514_medium.jpg" ||
              "/placeholder.svg"
            }
            alt={itemName}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="uppercase tracking-wide text-sm text-[#1E90FF] font-semibold">{itemCategory}</div>
              <h2 className="mt-1 text-xl font-semibold text-white">{itemName || "Card Title"}</h2>
            </div>
            <div className="bg-[#1E90FF]/20 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
              ${itemPrice}
            </div>
          </div>

          <p className="mt-2 text-[#CCCCCC] line-clamp-3">{itemDescription || "Card Description"}</p>

          <div className="mt-4 text-sm text-[#CCCCCC]">
            <span className="font-medium">Seller: </span>
            {item_id && item_id.length > 0 ? (
              <Link to={`/auction/user/${item_id}`} className="text-[#1E90FF] hover:text-[#FF69B4]">
                {sellerName}
              </Link>
            ) : (
              sellerName
            )}
          </div>

          <div className="mt-2 text-sm text-[#CCCCCC]">
            <span className="font-medium">Posted: </span>
            {new Date(itemPostDate).toLocaleDateString()}
          </div>

          <div className="mt-2 text-sm text-[#CCCCCC]">
            <span className="font-medium">Starts: </span>
            {new Date(itemStartDate).toLocaleDateString()}
          </div>

          <div className="mt-2 text-sm text-[#CCCCCC]">
            <span className="font-medium">Ends: </span>
            {new Date(itemEndDate).toLocaleDateString()}
          </div>

          <div className="mt-2 text-sm flex items-center">
            <span className="font-medium text-[#CCCCCC]">Time Left: </span>
            <span className="ml-2 text-[#FF69B4]">
              <CountdownTimer endDate={itemEndDate} onTimeUp={handleTimeUp} />
            </span>
          </div>

          <div className="mt-6">
            <Link to={`/auction/${auction_id}`}>
              <button className="w-full bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                View Auction
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;