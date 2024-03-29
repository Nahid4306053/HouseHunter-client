/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import Blogs from "../components/Home/Blogs";
import login_bg from '/images/login_bg.png'
import ConatactBanner from "../components/Home/ConatactBanner";
import OurMision from "../components/Home/OurMision";
import RentalHousesection from "../components/Home/RentalHousesection";
import Testimonial from "../components/Home/Testimonial";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/shared/SectionTitle";
import SearchBar from "../components/Home/SearchBar";

export default function Home() {
  ScrollTop(0, 0);

  return (
    <>
      <Pagetitle>Home || HouseHunter</Pagetitle>
      <PageBanner
        bgimg={login_bg}
        polygon={"polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%)"}
      >
        <div className="content md:min-h-[400px]  flex items-end">
          <div className="text-center md:pt-40 space-y-6">
            <h1 className="md:text-5xl pt-5 text-3xl  text-white font-bold ita">
              Discover Your Stay
            </h1>
         
            <h3 className="md:text-3xl text-xl text-white italic">
              Rent Your Dream House Today - Seamless, Reliable, Unforgettable
            </h3>
            <br />
            <SearchBar/>
          </div>
        </div>
      </PageBanner>
      <WhyChooseUs></WhyChooseUs>
      <div className="container mx-auto mb-28">
      <div className="flex lg:gap-20 items-center gap-10 lg:flex-row flex-col">
        <div className="flex-1">
          <SectionTitle
            customcss={"text-start"}
            title={"Premium House Rentals"}
            subtitle={"Unmatched Excellence in Every Stay"}
          ></SectionTitle>

          <p className="mt-5 leading-8">
            Welcome to our world of exceptional house rental services where
            excellence is not just a promise; it's our commitment to ensuring
            every stay exceeds expectations. Discover why we stand out as
            the best in the business:
            <br />
            <br />
            At HouseHunter, our dedication to providing the finest rental
            experience is evident in every aspect of our service. From a
            diverse portfolio of meticulously curated homes to transparent
            pricing and a seamless booking process, we prioritize your
            satisfaction at every turn.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/stjrkcr/1b703d38.jpg"
            alt="House Rentals Banner"
          />
        </div>
      </div>
    </div>
      <RentalHousesection></RentalHousesection>
      <ConatactBanner></ConatactBanner>
      <OurMision></OurMision>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
    </>
  );
}
