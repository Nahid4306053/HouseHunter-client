/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import log_bg from "/images/login_bg.png";

export default function EntrypointDesc() {
  return (
    <div style={{ backgroundImage: `url(${log_bg})`, backgroundPosition: "center", backgroundSize: "cover", }} className="hidden md:block md:col-span-3 lg:col-span-3 relative min-h-[700px] h-full  text-white ">
      
      <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
      <div className="relative p-10 z-10 flex items-end h-full  text-title">
        <div className="space-y-10">
          <h1 className="text-3xl">
          HouseHunter - Discover and Find your Dream Home
          </h1>
          <p className="leading-8 text-lg">
          Welcome to HouseHunter – your key to unlocking the door to your dream home. We're on a mission to simplify your home search, combining innovative technology with a passion for real estate. With a user-friendly platform and expert guidance, we're here to make your journey to finding the perfect home an enjoyable one. Explore, discover, and make your dream home a reality with HouseHunter.
          </p>
        </div>
      </div>
    </div>
  );
}
