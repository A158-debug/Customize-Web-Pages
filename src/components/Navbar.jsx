import React from "react";
import Fliga_logo from "../images/Fliga_logo.png";
import Group1img1 from "../images/Group1img1.png";
import Group1img3 from "../images/Group1img3.png";
import Group1img4 from "../images/Group1img4.png";
import Group1img5 from "../images/Group1img5.png";
import image5 from '../images/image5.png'

const Navbar = () => {
  return (
    <>
      <div
        className="text-white"
        style={{
          background: "#131514",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex flex-row flex-wrap">
          <div class="basis-2/12 flex flex-row flex-wrap justify-center content-center">
            <img
              src={Fliga_logo}
              alt="Fliga_logo"
              className="h-16 my-3 cursor-pointer"
            />
          </div>
          <div class="basis-6/12 flex flex-row flex-wrap justify-around items-center text-lg tracking-wide ">
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Home</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Services</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Portfolio</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Community</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Blog</p>
            </div>
          </div>
          <div class="basis-4/12 flex flex-row justify-end content-center items-center pr-8">
            <div
              className="cursor-pointer py-2 px-5 mr-10 rounded-lg hover:text-zinc-400"
              style={{
                background:
                  "linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)",
              }}
            >
              Sign Up
            </div>
            <div
              className="cursor-pointer py-2 px-5 rounded-lg hover:text-zinc-400"
              style={{
                background:
                  "linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)",
              }}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={image5} alt="" />
      </div>
      <div className="flex flex-col justify-center content-center mt-4">
        <div className="my-5">
          <p
            className="font-bold text-6xl text-center"
            style={{
              fontFamily: "Jura",
              mixBlendMode: "multiply",
              color: "#000000",
              lineHeight: "76px",
              fontStyle: "normal",
            }}
          >
            India's Leading Creative Platform
          </p>
          <p
            className="text-center font-light text-3xl mt-2"
            style={{
              color: " #4C696D",
              lineHeight: "32px",
              fontFamily: "Josefin Sans",
              fontStyle: "normal",
            }}
          >
            Experience hassle free bookings. Trusted by 2500+ Customers
          </p>
        </div>
        <div className="my-10 text-center">
          <input type="text" className="w-4/12 h-8 border-r-none" />
          <button
            className="text-white py-2 px-4 w-40"
            style={{
              background: "#221010",
              border: "1px solid #000000",
              borderRadius: "34px",
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-row justify-around content-center flex-wrap gap-y-5">
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center my-10">
          <div className="h-px bg-black w-11/12 mt-10"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
