import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import img from "../assets/auction2.jpg";
import img2 from "../assets/auction.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/auction");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[#1B1430] text-white">
      {/* Header */}
      <header className="bg-[#3A2F5F] border-b border-[#1E90FF]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-2xl">NeonBid</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">First Link</a>
            <a className="mr-5 text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Second Link</a>
          </nav>
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center bg-[#1E1E2F] hover:bg-[#FF69B4] text-white font-medium py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#3A2F5F] py-24">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="inline-block bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] bg-clip-text text-transparent [-webkit-background-clip:text]">
                Bid Smart, Win Big:
              </span>
              <br className="hidden lg:inline-block" />Your Gateway to
              Online Auctions
            </h1>
            <p className="mb-8 text-[#CCCCCC] leading-relaxed">
              Discover a new era of online auctions with our cutting-edge platform designed to bring buyers and sellers together in a seamless, secure, and engaging environment. Whether you are looking to find great deals or sell unique items, our system provides real-time bidding, transparent transactions, and a wide array of categories to explore. Join our community today and experience the excitement of winning big in the world of online auctions!
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="inline-flex text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] border-0 py-2 px-6 focus:outline-none rounded text-lg hover:scale-105 transition-transform duration-300 animate-pulse"
              >
                Signup
              </button>
              <button
                onClick={() => navigate("/login")}
                className="ml-4 inline-flex text-white bg-[#1E1E2F] hover:bg-[#FF69B4] border-0 py-2 px-6 focus:outline-none rounded text-lg hover:scale-105 transition-transform duration-300"
              >
                Login
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#3A2F5F] border-t border-[#1E90FF] py-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-[#1E90FF] tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 className="text-3xl font-medium text-white">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg h-full p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Shooting Stars</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-[#CCCCCC] leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg h-full p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-[#CCCCCC] leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg h-full p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-[#CCCCCC] leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Feature Section */}
      <section className="bg-[#3A2F5F] border-t border-[#1E90FF] py-24">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-300"
              alt="feature"
              src={img2}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-[#1E90FF] inline-flex items-center group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Feature Section */}
      <section className="bg-[#3A2F5F] border-t border-[#1E90FF] py-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl font-medium text-white mb-2">Pitchfork Kickstarter Taxidermy</h1>
            <p className="lg:w-1/2 w-full text-[#CCCCCC] leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">Shooting Stars</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">The Catalyzer</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">Neptune</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">Melanchole</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">Bunker</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 group">
              <div className="bg-[#1E1E2F] border border-[#1E90FF] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#1E90FF] text-white mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium title-font mb-2">Ramona Falls</h2>
                <p className="text-[#CCCCCC] leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 transition-transform duration-300"
          >
            Button
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#3A2F5F] border-t border-[#1E90FF] py-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium text-white mb-4">Our Team</h1>
            <p className="lg:w-2/3 mx-auto text-[#CCCCCC] leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Holden Caulfield</h2>
                  <p className="text-[#CCCCCC]">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Henry Letham</h2>
                  <p className="text-[#CCCCCC]">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Oskar Blinde</h2>
                  <p className="text-[#CCCCCC]">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">John Doe</h2>
                  <p className="text-[#CCCCCC]">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Martin Eden</h2>
                  <p className="text-[#CCCCCC]">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Boris Kitua</h2>
                  <p className="text-[#CCCCCC]">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Atticus Finch</h2>
                  <p className="text-[#CCCCCC]">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/104x94/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Alper Kamu</h2>
                  <p className="text-[#CCCCCC]">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-[#1E1E2F] border border-[#1E90FF] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-[#CCCCCC] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98/edf2f7/a5afbd"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Rodrigo Monchi</h2>
                  <p className="text-[#CCCCCC]">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Pricing Section */}
     <section className="bg-[#3A2F5F] py-24 border-t border-[#1E90FF]">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium text-white">Choose Your Plan</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h3 className="tracking-widest text-[#1E90FF]">FREE</h3>
                  <h2 className="text-4xl text-white font-medium mt-4">$0</h2>
                  <span className="text-[#CCCCCC] text-sm">Next 3 months</span>
                </div>
                <div className="flex-grow mt-6">
                  <p className="text-[#CCCCCC] text-center">Basic features to get started.</p>
                  <button
                    className="mt-6 w-full bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] text-white font-medium py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative">
                <span className="bg-[#FF69B4] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <div className="text-center">
                  <h3 className="tracking-widest text-[#1E90FF]">PRO</h3>
                  <h2 className="text-4xl text-white font-medium mt-4 flex items-center justify-center">$38<span className="text-[#CCCCCC] text-sm ml-1">/mo</span></h2>
                  <span className="text-[#CCCCCC] text-sm">Charging $456/year</span>
                </div>
                <div className="flex-grow mt-6">
                  <p className="text-[#CCCCCC] text-center">Advanced features and priority support.</p>
                  <button
                    className="mt-6 w-full bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] text-white font-medium py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 group">
              <div className="bg-[#1E1E2F] rounded-lg p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h3 className="tracking-widest text-[#1E90FF]">BUSINESS</h3>
                  <h2 className="text-4xl text-white font-medium mt-4 flex items-center justify-center">$54<span className="text-[#CCCCCC] text-sm ml-1">/mo</span></h2>
                  <span className="text-[#CCCCCC] text-sm">Charging $648/year</span>
                </div>
                <div className="flex-grow mt-6">
                  <p className="text-[#CCCCCC] text-center">Premium features for businesses.</p>
                  <button
                    className="mt-6 w-full bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] text-white font-medium py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#3A2F5F] border-t border-[#1E90FF] py-24 relative">
        <div className="absolute inset-0 bg-gray-10 blur-md">
          <img src={img} alt="map" className="w-full h-full object-cover object-center opacity-30" />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <h1>Get started withe use !</h1>
          <div className="lg:w-1/3 md:w-1/2 bg-[#1E1E2F] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="text-[#CCCCCC] leading-relaxed mb-5">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <input
              className="bg-[#3A2F5F] rounded border border-[#1E90FF] focus:outline-none focus:border-[#FF69B4] text-white text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-[#3A2F5F] rounded border border-[#1E90FF] focus:outline-none h-32 focus:border-[#FF69B4] text-white text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button
              className="text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] border-0 py-2 px-6 focus:outline-none hover:scale-105 transition-transform duration-300 rounded text-lg"
            >
              Button
            </button>
            <p className="text-[#CCCCCC] text-xs mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A2F5F] py-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap text-center -mb-10 -mx-4">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-sm text-[#1E90FF] tracking-widest font-medium mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">First Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Second Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Third Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-sm text-[#1E90FF] tracking-widest font-medium mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">First Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Second Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Third Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-sm text-[#1E90FF] tracking-widest font-medium mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">First Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Second Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Third Link</a>
                </li>
                <li>
                  <a className="text-[#CCCCCC] hover:text-[#FF69B4] transition-colors duration-300">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E2F]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-[#CCCCCC] text-sm text-center sm:text-left">
              © 2025 Kipa Auction —
              <a href="https://github.com/theavnishkumar" className="text-[#1E90FF] ml-1" target="_blank" rel="noopener noreferrer">
                @theavnishkumar
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-[#CCCCCC] text-sm">
            NeonBid
            </span>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Landing;