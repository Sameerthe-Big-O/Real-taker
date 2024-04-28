import React from "react";
import BackImage from "../assets/images/Ellipse-7.png";
import BackCl from "../assets/images/Ellipse 9.png";
import Haldthe from "../assets/svgs/Plus.svg";
import { Link } from "react-router-dom";

const Card = ({ img, title, iconsArray, person, phoneNumber }) => {
  return (
    <div className="text-center border border-[#DFE0EB] rounded-md shadow-md">
      {/* //*card header */}
      <div className="card-header">
        <p className="text-[#363740] font-semibold m-2 capitalize">{title}</p>
        <div className="flex gap-2 justify-center p-2 m-2">
          {iconsArray.map((icon, index) => (
            <Link to={'/'}>
            <img key={index} src={icon} alt={`Icon ${index}`} />
            </Link>
          ))}
        </div>
        <div className="w-full">
          <img src={img} alt={title} className="w-full object-cover" />
        </div>
      
      </div>

      {/* //*card body */}
      <div className="px-4 flex-col items-center">
        <button className="bg-[#363740] text-white w-full h-[52px] rounded-[6px] font-normal text-[14px] leading-[18px] mt-2 capitalize">
          floor management
        </button>
        <div className="flex gap-2 mt-2 justify-evenly px-2">
          {[...new Array(3)].map((_, index) => (
            
            <div
              key={index}
              className="bg-black opacity-70 h-[50px] w-12 flex justify-center items-center rounded-full"
              style={{
                backgroundImage: `url(${BackImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-bold text-[14px]">232</p>
            </div>
          ))}
          <div className="rounded-full bg-blue-300  flex items-center justify-center
          h-[50px] w-12
          ">
            <img src={Haldthe} alt="" />
          </div>
        </div>
        <div
          className="card-footer mt-2 border p-4 rounded-md 
          border-[#9FA2B4]
        "
        >
          <div className="flex justify-between w-full">
            <h3 className="text-[#000000] font-medium">Supervisors:</h3>
            <div className="flex justify-end">
              {[...new Array(3)].map((_, index) => {
                return (
                  <div key={index} className={`relative right-${index} h-7`}>
                    <img
                      src={BackCl}
                      alt={`Icon ${index}`}
                      className="h-full w-full"
                    />
                  </div>
                );
              })}
              <div
                className={`rounded-full bg-blue-300 w-[28px] h-[28px] flex items-center justify-center relative
                   right-${4}
              `}
              >
                <img src={Haldthe} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#000000] font-medium">Contacts:</h3>
            <div className="flex">
              {[...new Array(3)].map((_, index) => {
                return (
                  <div key={index} className={`relative right-${index} h-7`}>
                    <img
                      src={BackCl}
                      alt={`Icon ${index}`}
                      className="h-full w-full"
                    />
                  </div>
                );
              })}
              <div
                className={`rounded-full bg-blue-300 w-[28px] h-[28px] flex items-center justify-center relative
                   right-${4}
              `}
              >
                <img src={Haldthe} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between capitalize mt-3 p-1">
          <h2>{person}</h2>
          <p className="text-[#4AC4F8] text-[14px] font-medium">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
