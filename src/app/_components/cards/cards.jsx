import React from "react";

const Cards = () => {
  return (
    <div className="bg-white py-[50px] ">
      <p className="align-middle text-black text-4xl font-montserrat leading-[1.55] font-bold bg-center border-transparent border-solid text-center">
        Hali bunaqasi bo'lmagan, tayyor daromadli <br /> kanalni yutib olish
        imkoniga egasiz
      </p>
      <div className="flex gap-6 justify-center items-center py-10">
        <div className="relative bg-[#303030] rounded-[10px] p-6 text-white w-72 h-32 flex items-center">
          {/* Red Circle with Checkmark */}
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#c04646] border-4 border-white rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">✔</span>
          </div>
          {/* Card Text */}
          <p className="text-white text-[20px] font-montserrat leading-[1.55] font-normal">
            Youtubeda daromadli yo'nalishlar tanlashni
          </p>
        </div>{" "}
        <div className="relative bg-[#303030] rounded-[10px] p-6 text-white w-72 h-32 flex items-center">
          {/* Red Circle with Checkmark */}
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#c04646] border-4 border-white rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">✔</span>
          </div>
          {/* Card Text */}
          <p className="text-white text-[20px] font-montserrat leading-[1.55] font-normal">
            Youtubeda daromadli yo'nalishlar tanlashni
          </p>
        </div>{" "}
        <div className="relative bg-[#303030] rounded-[10px] p-6 text-white w-72 h-32 flex items-center">
          {/* Red Circle with Checkmark */}
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#c04646] border-4 border-white rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">✔</span>
          </div>
          {/* Card Text */}
          <p className="text-white text-[20px] font-montserrat leading-[1.55] font-normal">
            Youtubeda daromadli yo'nalishlar tanlashni
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
