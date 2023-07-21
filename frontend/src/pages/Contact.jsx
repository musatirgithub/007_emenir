import React from "react";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { style3 } from "../helper/homepageStyles";

const Contact = () => {
  return (
    <main className="min-h-[calc(100vh-8rem)]" style={style3}>
      <div className="min-h-[calc(100vh-8rem)] p-[2rem] text-[#FFF]/[0.7] bg-[#000]/[0.60]">
        <div className="flex flex-col gap-[3rem] justify-center items-center py-[1.5rem] lg:flex-row">
          <div className="w-[20rem] h-[8rem] relative  bg-[#000]/[0.6] shadow shadow-2xl hover:scale-110 transition duration-1000 ease-in-out">
            <div className="text-[2rem] bg-[#C19461] w-[4rem] h-[4rem] flex justify-center items-center rounded-[50%] absolute top-[-2rem] left-[8rem]">
              <ImLocation />
            </div>
            <div className="text-center text-[0.9rem] pt-[2.8rem]">
              <p>GMK Bulvari No:105/11</p>
              <p>06440 Cankaya/ANKARA</p>
            </div>
          </div>
          <div className="w-[20rem] h-[8rem] relative  bg-[#000]/[0.6] shadow shadow-2xl hover:scale-110 transition duration-1000 ease-in-out">
            <div className="text-[2rem] bg-[#C19461] w-[4rem] h-[4rem] flex justify-center items-center rounded-[50%] absolute top-[-2rem] left-[8rem]">
              <FaPhoneAlt />
            </div>
            <div className="text-center text-[0.9rem] pt-[3.4rem]">
              <p>0 (312) 433 33 33</p>
            </div>
          </div>
          <div className="w-[20rem] h-[8rem] relative  bg-[#000]/[0.6] shadow shadow-2xl hover:scale-110 transition duration-1000 ease-in-out">
            <div className="text-[2rem] bg-[#C19461] w-[4rem] h-[4rem] flex justify-center items-center rounded-[50%] absolute top-[-2rem] left-[8rem]">
              <MdEmail />
            </div>
            <div className="text-center text-[0.9rem] pt-[3.4rem]">
              <p>emenirhukuk@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-center my-[0.5rem]">
          <iframe
            title="emenir_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24475.566862696676!2d32.82572829781518!3d39.931415571521846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34efb3d41d359%3A0x466edc101cb7d967!2sAn%C4%B1ttepe%2C%20Gazi%20Mustafa%20Kemal%20Blv.%20No%3A105%2C%2006570%20%C3%87ankaya%2FAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sde!4v1689516982768!5m2!1str!2sde"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[30rem] h-[16rem] border-solid border-[#681D24] border-[0.125rem] lg:w-[60rem] lg:h-[20rem]"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
