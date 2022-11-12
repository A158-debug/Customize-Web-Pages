import React from "react";
import Rectangle208 from '../images/Rectangle208.png'
import Rectangle209 from '../images/Rectangle209.png'
import Group4img1 from '../images/Group4img1.png'

const Awards = () => {
  return (
    <>
      <div
        className="flex flex-row flex-wrap"
        style={{
          background: "#DDF8F3",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          width: "98%",
          margin: "2rem auto",
          padding: "3rem",
        }}
      >
        <div
          className="basis-1/2 flex flex-row  justify-around content-center  flex-wrap"
          style={{
            background: "#4E99A4",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "2rem",
          }}
        >
          <img src={Rectangle208} alt="" className="w-60 h-30" />
          <img src={Rectangle209} alt="" className="w-60 h-30" />
        </div>
        <div className="basis-1/2 flex flex-row flex-wrap">
          <div className="basis-1/2 flex flex-col justify-center content-center p-5 gap-y-3">
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center content-center p-5 gap-y-3">
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="basis-1/3 flex flex-row justify-around "
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img src={Group4img1} alt="" />
              <span className="self-center">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
