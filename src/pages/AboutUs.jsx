/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import OurCountDown from "../components/Home/OurCouwndown";
import PageBanner from "../components/shared/PageBanner";

export default function AboutUs() {
  ScrollTop();

  return (
    <>
      <Pagetitle>About us || HouseHunter</Pagetitle>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/RTBK4y8/ezgif-2-01e9e428a9.png"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            About HouseHunter
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Your Dream Home Awaits - Comfortable, Convenient, Unforgettable
          </h3>
        </div>
      </PageBanner>
      <div className="container mx-auto lg:my-20 mt-10">
        <div className="w-full gap-20 items-center">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl">
              HouseHunter Chronicles: Crafting Your Perfect Stay
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              Welcome to HouseHunter, where we redefine the way you experience
              home rentals. "Your Dream Home, Your Way" is not just a tagline;
              it's our commitment to providing you with seamless and unforgettable
              house rental experiences. At HouseHunter, every home is an opportunity
              to create lasting memories. Discover the extraordinary in the
              comfort of your dream home. Your journey with HouseHunter starts here,
              where every stay is tailored to exceed your expectations.
            </p>
          </div>
          <div className="">
            <img
              className="mx-auto max-h-[600px]"
              src="https://i.ibb.co/SmwxmNr/Illustrator-Vector-Illustration-1.jpg"
              alt="HouseHunter Illustration"
            />
          </div>
        </div>
      </div>
      <OurCountDown></OurCountDown>
    </>
  );
}
