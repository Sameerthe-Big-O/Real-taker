import React from "react";
import Card from "../components/Card";
import Trash from "../assets/images/Trash.png";
import Search from "../assets/images/Search.png";
import Pencil from "../assets/images/Pencil.png";
import Error from "../assets/images/Error.png";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import "../css/Cards.css";

const Buildings = () => {
  const icons = [Trash, Search, Pencil, Error];

  const generateUniqueName = () => {
    const names = [
      "John",
      "Emma",
      "Michael",
      "Sophia",
      "William",
      "Olivia",
      "James",
      "Ava",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const cardsData = [
    {
      img: image1,
      title: "Here the ali town",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image2,
      title: "We all are here by chance",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image3,
      title: "how are you doing",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image1,
      title: "Here the ali town",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image2,
      title: "No way we can do this",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image3,
      title: "why can't we use that",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image1,
      title: "So why did you say",
      iconsArray: icons,
      person: generateUniqueName(),
      phoneNumber: "2323232323",
    },
    {
      img: image2,
      title: "why we want to do that",
      iconsArray: icons,
      person: generateUniqueName(),
    },
  ];
  return (
    <>
      <div className="bg-[#F7F8FC] font-Poppins">
        <div className="mb-2">
          <p className="text-[24xpx] font-bold text-[#252733 ">Buildings  Management</p>
        </div>
        <div className="cards-wrapper gap-6">
          {cardsData.map((cardData, index) => {
            return <Card key={index} {...cardData} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Buildings;
