import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAndProducts } from "../store/auction/auctionSlice";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";

const MyAuction = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { userData, userProducts, loading, error } = useSelector(
    (state) => state.auctions
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(fetchUserAndProducts(userId));
  }, [dispatch, userId]);

  // Filtrer les produits
  const filteredProducts = userProducts
    ? userProducts.filter((auction) => {
        const matchesDate =
          !filterDate ||
          new Date(auction.itemStartDate).toLocaleDateString() === filterDate ||
          new Date(auction.itemEndDate).toLocaleDateString() === filterDate;
        const matchesCategory =
          !filterCategory || auction.itemCategory === filterCategory;
        return matchesDate && matchesCategory;
      })
    : [];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  if (error)
    return (
      <div>
        <p className="text-white">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="min-h-[calc(100svh-9rem)] px-4 py-4 bg-[#1B1430]">
      <h1 className="text-4xl md:text-5xl font-normal mb-6 text-center md:text-left bg-[#1E90FF] bg-clip-text text-transparent pb-2 border-b-2 border-[#1E90FF] shadow-md">
     
    Auctions by {userData?.name || "User"}
  
</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filtre */}
        <div className="w-full md:w-1/4 bg-[#3A2F5F] p-4 rounded-lg shadow-md">
          <h3 className="text-white text-lg font-semibold mb-4">Filters</h3>
          <div className="  md:flex ">
      <UserProfile name={userData?.name} bids={"7"} />
      </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-2 px-3 text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Category
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-2 px-3 text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4]"
            >
              <option value="">All Categories</option>
              <option value="2D Digital Art">2D Digital Art</option>
              <option value="3D Art & Modeling">3D Art & Modeling</option>
              <option value="Generative & Algorithmic Art">
                Generative & Algorithmic Art
              </option>
              <option value="Motion Design & Animation">
                Motion Design & Animation
              </option>
              <option value="Interactive & Immersive Art">
                Interactive & Immersive Art
              </option>
              <option value="Photo Manipulation & Mixed Media">
                Photo Manipulation & Mixed Media
              </option>
              <option value="NFT & Blockchain Art">NFT & Blockchain Art</option>
              <option value="Experimental & Glitch Art">
                Experimental & Glitch Art
              </option>
            </select>
          </div>
        </div>
        {/* Cartes */}
        <div className="w-full md:w-3/4">
          {userProducts && userProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((auction) => (
                  <Card
                    key={auction._id}
                    auction_id={auction._id}
                    itemName={auction.itemName}
                    itemDescription={auction.itemDescription}
                    itemPrice={auction.itemPrice}
                    itemPostDate={auction.createdAt}
                    itemStartDate={auction.itemStartDate}
                    itemEndDate={auction.itemEndDate}
                    itemPhoto={auction.itemPhoto}
                    sellerName={auction.seller.name}
                  />
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-[#1E90FF] text-white font-medium py-2 px-4 rounded-md mr-2 disabled:bg-[#1E1E2F] disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-white mx-4">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-[#1E90FF] text-white font-medium py-2 px-4 rounded-md disabled:bg-[#1E1E2F] disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center bg-[#3A2F5F] rounded-lg shadow-md my-2 max-w-md max-md:mx-auto">
              <svg
                className="w-12 h-12 text-white"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="200px"
                width="200px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="File_Off">
                  <g>
                    <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z"></path>
                    <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z"></path>
                  </g>
                </g>
              </svg>
              <h3 className="text-xl font-medium mt-4 text-white">
                Product not found
              </h3>
              <p className="text-[#CCCCCC] mt-2">
                {userData?.name} has not listed any products yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAuction;