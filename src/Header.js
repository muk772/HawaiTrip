import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaClone } from "react-icons/fa";

const HeaderData = ["Surfing", "Hula", "Volcanoes"];

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="">
      {showSideBar && (
        <div className="fixed z-50 top-0 left-0 w-full h-[100vh] bg-white overflow-y-hidden">
          <div
            className="absolute right-8 top-8 font-mono font-black text-3xl"
            onClick={() => setShowSideBar(false)}
          >
            X
          </div>
          <div className="mt-40 pl-20 flex flex-col">
            <Link
              to="/"
              onClick={() => {
                setShowSideBar(false);
              }}
            >
              <h2 className="font-mono font-bold text-2xl">Home</h2>
            </Link>
            {HeaderData.map((curelem) => (
              <h2
                onClick={() => {
                  setShowSideBar(false);
                }}
                key={curelem}
              >
                <h2 className="font-mono font-bold text-2xl mt-5">{curelem}</h2>
              </h2>
            ))}
            <button className="bg-green-800 w-32 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6">
              Book a trip
            </button>
          </div>
        </div>
      )}
      <div
        className="h-[500px] left-0 top-0 bg-cover w-full"
        style={{ backgroundImage: "url('../Images/hawaiimg.png')" }}
      >
        <div className="flex flex-row justify-between items-center p-0 md:p-5 gap-5 lg:gap-[100px] lg:absolute lg:w-[80%] h-16 lg:left-[180px] top-6 bg-white lg:rounded-lg">
          <div className="flex flex-row items-center">
            <h2 className="font-bold font-mono text-3xl px-3">Aloha</h2>
            <Link to={"/"}>
              <h2 className="flex-none font-mono  hidden lg:block ml-16">
                Home
              </h2>
            </Link>
            {HeaderData.map((curelem) => (
              <Link
                to={"/activities/" + curelem}
                key={curelem}
                className="hidden lg:block"
              >
                <h2 className="flex-none font-mono  ml-16">{curelem}</h2>
              </Link>
            ))}
          </div>
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hidden lg:block">
            Book a trip
          </button>
          <FaBars
            onClick={() => {
              setShowSideBar(true);
            }}
            className="mr-5 lg:hidden"
            size={20}
          />
        </div>
        <div className="p-10 pt-40">
          <h2 className="font-bold lg:text-9xl text-9xl text-center flex items-center">
            <span className="font-mono bg-gradient-to-b from-transparent to-white text-transparent bg-clip-text ml-0">
              Welcome to Hawaii
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
