import React from "react";
import logo from "./assets/Flipkart-logo 1.svg";
import menu from "./assets/menu.png";
import search from "./assets/search.png";
import cart from "./assets/cart.png";
import profile from "./assets/profile.png";

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
      <main>
        
      </main>
    </div>
  );
}

export default Home;
