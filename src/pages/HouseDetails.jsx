/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import useFullHouseDetails from "../Hooks/useFullHouseDetails";
import BookingHouse from "../components/CarDetails/BookingHouse";
import Gallery from "../components/CarDetails/Gallery";
import CarReview from "../components/Dashboard/Rating/CarReview";
import PageBanner from "../components/shared/PageBanner";
import SmallError from "../components/shared/SmallError";
import SmallLoading from "../components/shared/SmallLoading";
import ad_banner from '/images/ad_banner.png'
export default function CarDetails() {
  const { id } = useParams();
  const { FullHouseDetails, error, isError, isLoading, isSuccess } =
    useFullHouseDetails(id);
  ScrollTop();
  return isLoading ? (
    <div className="w-full flex justify-center">
      <SmallLoading />
    </div>
  ) : isError ? (
    <div className="w-full flex justify-center">
      <SmallError></SmallError>
    </div>
  ) : (
    <>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={FullHouseDetails.data?.gallery[0]}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            <Pagetitle>
              {" "}
              {FullHouseDetails.data?.name} || HouseHunter{" "}
            </Pagetitle>
            {FullHouseDetails.data?.name}
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Rent {FullHouseDetails.data?.name} House Today - to make your dreams
            comes true
          </h3>
        </div>
      </PageBanner>
      <div className="mt-28 container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="content_area col-span-2 lg:pr-14">
            <Gallery data={FullHouseDetails.data?.gallery}></Gallery>
            <div className="details mt-14">
              <div className="header text-2xl text-white p-3  bg-black font-semibold px-4 border-l-4 border-sky-500  ">
                House Details
              </div>
              <ul className="grid  grid-cols-1 md:grid-cols-2 mt-10 gap-6 text-xl">
                <li>
                  <i className="fa-regular fa-city  bg-sky-500   w-10 text-center py-2 mr-4  text-white"></i>
                  <strong>City :</strong> {FullHouseDetails.data?.city}
                </li>
                <li>
                  <i className="fa-regular fa-location-dot  bg-sky-500   w-10 text-center py-2 mr-4  text-white"></i>
                  <strong>Address :</strong> {FullHouseDetails.data?.address}
                </li>
                <li>
                  <i className="fa-solid fa-bed-pulse  bg-sky-500   w-10 text-center py-2 mr-4 text-white"></i>
                  <strong>Bed rooms :</strong> {FullHouseDetails.data?.bedrooms}
                </li>
                <li>
                  <i className="fa-solid fa-bath bg-sky-500   w-10 text-center py-2 mr-4 text-white"></i>
                  <strong>Bath Rooms : </strong>
                  {FullHouseDetails.data?.bathrooms}
                </li>
                <li>
                  <i className="fa-regular fa-calculator  bg-sky-500   w-10 text-center py-2 mr-4 text-white"></i>
                  <strong>Room size : </strong>{" "}
                  {FullHouseDetails.data?.room_size} FIT
                </li>
                <li>
                  <i className="fa-regular fa-phone  bg-sky-500   w-10 text-center py-2 mr-4 text-white"></i>
                  <strong>Phone number: </strong>
                  {FullHouseDetails.data?.phone_number}
                </li>
              </ul>

              <p className=" mt-7 leading-8">
                {FullHouseDetails.data?.description}
              </p>
              <div className="header text-2xl text-white p-3 mt-10  bg-black font-semibold px-4 border-l-4 border-sky-500  ">
                House Reviews
              </div>
              <CarReview id={id}></CarReview>
              <div className="p-16 bg-sky-300 text-white mt-10 space-y-4">
                <h3 className="text-2xl font-bold">
                  Do you want to Visit the house and view it?
                </h3>
                <p>
                  Integer tor bibendum estnu faucibus gravida aliquam nu lectus
                  lacina lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <div className="flex justify-end">
                  <Link to="/contact">
                    <button className="btn btn-outline rounded-none border-r-4 border-white text-white">
                      Contact Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="BookingArea ">
            <div className="bg-black text-center text-xl text-white font-semibold border-l-4 border-sky-500   p-3">
              <h1>
                {FullHouseDetails.data?.rent_per_month}TK
                <span className="text-xs">/Per Mounth</span>
              </h1>
            </div>
            <BookingHouse data={FullHouseDetails.data}></BookingHouse>
            <div className="mt-14">
              <Link to={"/cars"}>
                <img src={ad_banner} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
