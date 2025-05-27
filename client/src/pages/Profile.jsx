import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/auth/authSlice";

const VITE_API = import.meta.env.VITE_API;

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [profilePicture, setProfilePicture] = useState(null); // For previewing the new image
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [pendingProducts, setPendingProducts] = useState([]); // State for pending products
  const [productLoading, setProductLoading] = useState(false); // Loading state for products

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    // Initialize form data with user data
    setFormData({ name: user.name, email: user.email });

    // Fetch pending products if user is admin
    if (user.isAdmin) {
      fetchPendingProducts();
    }
  }, [user, navigate]);

  const fetchPendingProducts = async () => {
    setProductLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${VITE_API}/api/auctions/show-waiting`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setPendingProducts(data.products || []);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to fetch pending products." });
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setProductLoading(false);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setMessage(null);
    setProfilePicture(null); // Reset preview
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData({ name: user.name, email: user.email });
    setProfilePicture(null);
    setMessage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput.files[0]) {
        formDataToSend.append("itemPhoto", fileInput.files[0]);
      }

      // Simulate API call to update user profile, including image
      const response = await fetch(`${VITE_API}/api/user/${user._id}`, { // Updated to user._id
        method: "PUT",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.user);
        const updatedUser = data.user;
        await dispatch(updateUser(updatedUser));
        setMessage({ type: "success", text: "Profile updated successfully!" });
        setEditMode(false);
        setProfilePicture(null);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to update profile." });
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProductStatus = async (productId, status) => {
    setProductLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${VITE_API}/api/products/${productId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (response.ok) {
        setPendingProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
        setMessage({ type: "success", text: `Product ${status} successfully!` });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to update product status." });
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setProductLoading(false);
    }
  };

  if (!user) return null;

  return (
    <section className="min-h-screen bg-[#040301] flex items-center justify-center py-8">
      <div className="w-full max-w-2xl">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-[#3A2F5F] to-[#2A2545] rounded-lg shadow-[0_0_15px_5px_rgba(255, 105, 180, 0.6)] p-10 mx-6">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Profile
          </h1>

          {/* Profile Picture */}
          <div className="flex justify-center mb-8 relative">
            <div className="w-24 h-24 rounded-full bg-[#1E1E2F] flex items-center justify-center text-4xl font-bold text-[#1E90FF] border-4 border-[#1E90FF] shadow-md overflow-hidden">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            {editMode && (
              <label className="absolute bottom-0 right-0 bg-[#1E90FF] text-white rounded-full p-2 cursor-pointer hover:bg-[#FF69B4] transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"
                  />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Success/Error Message */}
          {message && (
            <div
              className={`text-center mb-6 p-3 rounded-lg ${message.type === "success"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
                }`}
            >
              {message.text}
            </div>
          )}

          {/* User Info */}
          <div className="space-y-6">
            {editMode ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-lg font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3 rounded-lg bg-[#1E1E2F] text-white border border-[#1E90FF] focus:ring-[#1E90FF] focus:border-[#FF69B4] transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3 rounded-lg bg-[#1E1E2F] text-white border border-[#1E90FF] focus:ring-[#1E90FF] focus:border-[#FF69B4] transition-all duration-300"
                    required
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-white bg-gray-600 hover:bg-gray-700 py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="text-white text-lg flex justify-between items-center">
                  <span>
                    <strong>Name:</strong> {user.name}
                  </span>
                </div>
                <div className="text-white text-lg flex justify-between items-center">
                  <span>
                    <strong>Email:</strong> {user.email}
                  </span>
                </div>
                <div className="text-white text-lg flex justify-between items-center">
                  <span>
                    <strong>Admin:</strong> {user.isAdmin ? "Yes" : "No"}
                  </span>
                </div>
                <div className="text-white text-lg flex justify-between items-center">
                  <span>
                    <strong>Member Since:</strong>{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={handleEdit}
                    className="text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Admin Section for Product Verification */}
          {user.isAdmin && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white mb-4">Admin Product Verification</h2>
              {productLoading ? (
                <p className="text-white">Loading pending products...</p>
              ) : pendingProducts.length === 0 ? (
                <p className="text-white">No pending products to verify.</p>
              ) : (
                <div className="space-y-4">
                  {pendingProducts.map((product) => (
                    <div
                      key={product._id}
                      className="bg-[#1E1E2F] p-4 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl text-white">{product.itemName}</h3>
                      <p className="text-gray-300">Seller: {product.seller.name || "Unknown"}</p>
                      <p className="text-gray-300">Description: {product.itemDescription}</p>
                      {product.itemPhoto && (
                        <img
                          src={product.itemPhoto}
                          alt={product.itemName}
                          className="w-16 h-16 object-cover mt-2 rounded"
                        />
                      )}
                      <div className="mt-2 flex space-x-4">
                        <button
                          onClick={() => handleUpdateProductStatus(product._id, "accepted")}
                          className="text-white bg-green-600 hover:bg-green-700 py-1 px-3 rounded-lg hover:scale-105 transition-transform duration-300"
                          disabled={productLoading}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleUpdateProductStatus(product._id, "refused")}
                          className="text-white bg-red-600 hover:bg-red-700 py-1 px-3 rounded-lg hover:scale-105 transition-transform duration-300"
                          disabled={productLoading}
                        >
                          Refuse
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;