import React from "react";

const ProfileTaker = ({ image, text }) => {
  return (
    <div className="flex items-center  gap-4">
      <img src={image} alt="" className="rounded-full h-[46px] w-[44px]  " />
      <h2>{text}</h2>
    </div>
  );
};

export default ProfileTaker;
