import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, deleteAccount } from "../store/auth/authSlice";
import DialogBox from "./DialogBox";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const navMenu = [
    { title: "Home", url: "/auction" },
    { title: "My Auction", url: `/auction/user/${user.userId}` },
    { title: "Create Auction", url: "/create-auction" },
    { title: "Profile", url: "/profile" },
  ];

  // Open dropdown
  const openMenu = () => {
    setOpen(!open);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close dropdown when clicked outside
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  // User logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Delete user account
  const handleDeleteAccount = async () => {
    if (user) {
      try {
        await dispatch(deleteAccount(user.userId)).unwrap();
        navigate("/");
      } catch (error) {
        console.error("Failed to delete account:", error);
      }
    }
  };

  // Close dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#2A1B3D] border-b border-[#3A2F5F] sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/auction"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          NeonBid
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="relative">
            <button
              id="dropdownUserAvatarButton"
              onClick={openMenu}
              ref={buttonRef}
              className="flex text-sm bg-[#1E1E2F] rounded-full md:me-0 focus:ring-4 focus:ring-[#1E90FF]"
              type="button"
            >
              <span className="sr-only">open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="user photo"
              />
            </button>

            {open && (
              <div
                id="dropdownAvatar"
                ref={dropdownRef}
                className="z-10 bg-[#3A2F5F] divide-y divide-[#1E1E2F] rounded-lg shadow w-44 absolute right-0 mt-2 text-white"
              >
                <div className="px-4 py-3 text-sm">
                  <div>{user.name}</div>
                  <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul
                  className="py-2 text-sm"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  {navMenu.map((menu, index) => (
                    <li key={index} onClick={() => setOpen(false)}>
                      <Link
                        to={menu.url}
                        className="block px-4 py-2 hover:bg-[#1E90FF] hover:text-white rounded"
                      >
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="py-2">
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="px-4 py-2 text-sm text-[#FF69B4] hover:bg-[#1E90FF] w-full text-left rounded"
                  >
                    Delete My Acount
                  </button>
                </div>
                <div className="py-2">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-[#FF69B4] hover:bg-[#1E90FF] w-full text-left rounded"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            {navMenu.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.url}
                  className="block py-2 px-3 text-white hover:bg-[#1E90FF] hover:text-white rounded md:p-0"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isDialogOpen && (
        <DialogBox onConfirm={handleDeleteAccount} onCancel={closeDialog} />
      )}
    </nav>
  );
};

export default Navbar;