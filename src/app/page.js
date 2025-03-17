"use client";
import { useEffect, useState } from "react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Telefon inputining default stillari
export default function Home() {
  const [time, setTime] = useState(180); // 180 sekund = 3 daqiqa

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [error, setError] = useState("");

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  // ✅ Yangi handleSubmit funksiyasi
  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setError(""); // Xatolikni tozalash
    alert("Ma'lumotlar yuborildi!");
  };

  return (
    <div className="flex items-center justify-center gap-[50px] p-[30px]  ">
      <div className=" flex flex-col justify-center h-[100%]">
        <div className="w-[424px] h-[43px] border border-[#ffed64] rounded-[100px] flex items-center">
          <span className="w-[157px] h-full bg-[#ffed64] text-black rounded-[100px] gap-[10px] flex items-center justify-center">
            <div className="circle"></div>
            Jonli Efir
          </span>
          <span className="flex-1 h-full text-white flex items-center justify-center">
            27-28-fevral | 20:30 UZB
          </span>
        </div>
        <div>
          <p className=" mt-[40px] mb-[40px] align-middle text-white text-[28px] font-montserrat leading-[1.55] font-bold bg-center border-transparent border-solid">
            90% shogirdlarim 2 oyda 1000$ <br /> daromadga chiqqan, buni sizga 3{" "}
            <br />
            kunda o'rgataman
          </p>
        </div>
        <div className="w-[477px] flex justify-center items-center flex-col p-[15px] h-[392px] bg-[#2e2e2e99] border-1 border-[#46c09a] rounded-[20px]">
          <p className="align-middle text-center text-white text-[18px] font-montserrat leading-[1.55] font-normal bg-center border-transparent border-solid">
            999.000 so’m bo’lgan master-klasda bepul qatnashish uchun quyidagi
            tugmani bosing va vaqt tugaguncha ro’yhatdan o’ting!
          </p>
          <div className="flex text-[38px] text-black font-bold text-center text-[38px] text-white font-bold text-center pt-[20px]">
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <div>
            <span className=" text-white text-center text-[23px] line-through ">
              999.000so’m
            </span>
            <span className="mb-2 align-middle block text-center text-[#46c09a] text-[26px] font-[Montserrat] leading-[1.55] font-bold bg-center border-transparent border-solid">
              BEPUL
            </span>
          </div>
          <button className=" w-[344px] h-[67px] text-black text-lg font-montserrat font-semibold leading-[1.55] rounded-[18px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-transparent shadow-[0px_5px_0px_0px_rgba(126,118,33,1)] transition-all duration-200 ease-in-out hover:brightness-110">
            BEPUL RO'YXATDAN O'TISH
          </button>
        </div>
      </div>
      <div>
        <div className="w-[407px] h-[488px] pt-[40px]">
          <img
            className="w-[407px] h-auto"
            src="https://holitechb.netlify.app/2.png"
            alt="man"
          />
        </div>
      </div>
    </div>
  );
}
