import React from "react";
import { Link } from "react-router-dom";

const HeaderData = ["Surfing", "Hula", "Volcanoes"];

const Header = () => {
  return (
    <div className="">
      <div
        className="w-[1540px] h-[560px] left-0 top-0 bg-cover"
        style={{ backgroundImage: "url('../Images/hawaiimg.png')" }}
      >
        <div className="absolute w-[850px] h-[264px] left-[250px] top-[176px]">
          <h2 className="font-bold text-9xl leading-[90%] text-center flex items-center">
            <span className="font-mono bg-gradient-to-b from-transparent  to-white text-transparent bg-clip-text ml-40">
              Welcome to Hawaii
            </span>
          </h2>
        </div>
        <div className="flex flex-row justify-between items-center p-0 md:p-5 gap-6 md:gap-[100px] absolute w-[1136px] h-16 left-[188px] top-6 bg-white rounded-lg">
          <div className="flex flex-row items-center">
            <h2 className="font-bold font-mono text-3xl px-3">Aloha</h2>
            <Link to={"/"}>
              <h2 className="flex-none font-mono  ml-16">Home</h2>
            </Link>
            {HeaderData.map((curelem) => (
              <Link to={"/activities/" + curelem} key={curelem}>
                <h2 className="flex-none font-mono  ml-16">{curelem}</h2>
              </Link>
            ))}
          </div>
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Book a trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
