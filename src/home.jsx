import React from "react";
import logo from "./assets/Flipkart-logo 1.svg";
import menu from "./assets/menu.png";
import search from "./assets/search.png";
import cart from "./assets/cart.png";
import profile from "./assets/profile.png";
import star from "./assets/star.svg";
import star2 from "./assets/star2.png";
import mobile from "./assets/mobile.png";
import home from "./assets/home.png";
import electronics from "./assets/electronics.png";
import fashion from "./assets/fashion.png";
import model from "./assets/model.png";
import velosiped from './assets/velosiped.png'
import main_background1 from './assets/main_background1.png'
import main_background2 from './assets/main_background2.png'
import section1 from './assets/section1.png'
import section2_1 from './assets/section2_1.png'
import section2_2 from './assets/section2_2.png'
import section3_1 from './assets/section3_1.png'

function Home() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-[50px]">
      <header className="h-[70px] flex items-center justify-between w-[70%]">
        <div className="flex items-center justify-center gap-[50px]">
          <div className="cursor-pointer w-[200px]">
            <img src={logo} alt="" draggable="false" />
          </div>
          <div className="flex items-center justify-center cursor-pointer gap-[10px]">
            <div>
              <img src={menu} alt="" draggable="false" />
            </div>
            <p className="text-[20px] font-[500]">Menu</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[10px] rounded-[50px] border-[1px] border-black pl-[15px] pr-[15px]">
          <select className="rounded-[50px] h-[42px]">
            <option value="1" className="text-[20px] font-[400]">
              All Categories
            </option>
            <option value="2" className="text-[20px] font-[400]">
              All Categories
            </option>
            <option value="3" className="text-[20px] font-[400]">
              All Categories
            </option>
          </select>
          <div className="flex items-center justify-center">
            <input
              type="text"
              id="search"
              placeholder="Search Product,Brands and more..."
              className="outline-none text-[16px] text-[#AFADAD] font-[400]"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="search" className="cursor-pointer w-[20px]">
              <img src={search} alt="" draggable="false" />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="flex items-center gap-[5px]">
            <div className="w-[30px]">
              <img src={cart} alt="" draggable="false" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p>cart</p>
              <p>$240</p>
            </div>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[30px]">
              <img src={profile} alt="" draggable="false" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p>ACCOUNT</p>
              <p>Sign in</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-[50px] w-[70%] pb-[100px]">
        <div className="flex item-center justify-between w-[100%]">
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[16px]">
              <img src={star} alt="" draggable="false" />
            </div>
            <p className="text-[#1A89DB] text-[12px] font-[700]">Top Offers</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={star2} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Grocery</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={mobile} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Mobiles</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={home} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Home</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={electronics} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Electronics</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={fashion} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Fashion</p>
          </div>
          <div className="flex items-center justify-center gap-[7px] pl-[7px] pr-[7px] hover:border-[2px] hover:border-[#1A89DB] hover:border-b-[0px] hover:border-l-[0px] hover:border-r-[0px]">
            <div className="w-[32px]">
              <img src={model} alt="" draggable="false" />
            </div>
            <p className="text-[12px] font-[500]">Beauty & Accesories</p>
          </div>
        </div>
        <div className="p-[20px] rounded-[20px] bg-[#F2F0F0] flex items-center justify-center gap-[45px]">
          <div className="flex flex-col items-center justify-between gap-[60px]">
            <div className="">
              <img src={main_background1} alt="" draggable='false' />
            </div>
            <div className="">
              <img src={main_background2} alt="" draggable='false' />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-[30px] pt-[50px] rounded-[10px] w-[700px] bg-[#FFE1E3]">
            <div className="flex flex-col items-start justify-center gap-[13px]">
              <p className="text-[36px] font-[700]">Lifelong Tribe 20T</p>
              <p className="text-[14px] text-[#6F6F6F] font-[500]">
                Matte Black And Fluorescent yellow 20 T Road Cycle (Single
                Speed, Black
              </p>
              <p className="text-[14px] text-[#6F6F6F] font-[500] pl-[20px]">
                ₹5,000 From{" "}
                <span className="text-[#000000] font-[700]">₹2,000*</span>
              </p>
              <button className="flex items-center justify-center ml-[20px] text-white bg-[#FF0000] h-[22px] rounded-[20px] pl-[29px] pr-[29px]">
                Buy Now
              </button>
            </div>
            <div className="w-[580px]">
              <img src={velosiped} alt="" draggable='false'/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[25px]">
          <p className="text-[34px] font-[700] w-[100%]">
            Feature Product
          </p>
          <div className="flex items-center justify-center w-[100%]">
            <img src={section1} alt="" draggable='false'/>
          </div>
          <p className="text-[34px] font-[700] w-[100%]">
            Last View Products
          </p>
          <div className="flex items-center justify-center gap-[20px]">
            <div className="h-[100%]">
              <img src={section2_1} alt="" draggable='false'/>
            </div>
            <div className="h-[100%]">
              <img src={section2_2} alt="" draggable='false'/>
            </div>
          </div>
          <p className="text-[34px] font-[700] w-[100%]">
            Shop By Categories
          </p>
          <div className="flex items-center justify-start w-[100%] gap-[10px]">
              <div className="w-[100%] h-[400px]">
                <img src={section3_1} alt="" draggable='false'/>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
