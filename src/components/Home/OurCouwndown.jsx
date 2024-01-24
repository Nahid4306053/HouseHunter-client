/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";

export default function OurCountDown({ customcss }) {
  return (
    <>
      <div className="container mx-auto my-14 lg:my-28">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 bg-b">
            <img
              className="w-full mx-auto"
              src="https://i.ibb.co/t41rMWm/mision-vision-y-valores.png"
              alt="task"
            />
          </div>
          <div className="flex-1 max-w-xl space-y-5">
            <h5 className="text-xl text-sky-500 font-semibold">
              Unmatched Commitment, Extraordinary Adventures
            </h5>
            <h1 className="text-4xl font-bold max-w-">
              Igniting Your Odyssey with HouseHunter' Unwavering Commitment
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              HouseHunter is on a mission to redefine your stay. With
              unwavering commitment, we seamlessly blend innovation and passion,
              providing more than just houses—creating gateways to unforgettable
              moments. Trust HouseHunter for excellence, convenience, and the
              joy of a cozy home. Welcome to a mission-driven experience that
              goes beyond the ordinary.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-sky-500">
        <div className="rounded-lg container font-Montserrat mx-auto">
          <div className="rounded-lg relative text-white py-20 w-full">
            <div className="relative px-14 z-10 grid-cols-1 grid md:grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="coundonw_item text-center">
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="k+"
                  duration={10}
                  end={22}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />
                <p className="mt-3">Happy Guests</p>
              </div>
              <div className="coundonw_item text-center">
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="+"
                  duration={10}
                  end={250}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />
                <p className="mt-3">Quality Homes</p>
              </div>
              <div className="coundonw_item text-center">
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="+"
                  duration={10}
                  end={25}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />
                <p className="mt-3">Years of Excellence</p>
              </div>
              <div className="coundonw_item text-center">
                <CountUp
                  className="text-7xl"
                  start={0}
                  suffix="k+"
                  duration={10}
                  end={10}
                  enableScrollSpy={true}
                  triggerOnce={true}
                />
                <p className="mt-3">Bookings Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-14 lg:my-28">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-1 lg:order-0 max-w-xl space-y-5">
            <h5 className="text-xl text-sky-500 font-semibold">
              Committed for the Long Run
            </h5>
            <h1 className="text-4xl font-bold max-w-">
              HouseHunter Pledge: A Symphony of Unmatched Commitment
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              HouseHunter commitment is excellence. We redefine expectations
              and deliver unmatched service. From your first choice, enter a
              realm of reliability, transparency, and dedication. It's more than
              a promise; it's the cornerstone of every stay. HouseHunter
              ensures a seamless, unparalleled experience, meeting your trust
              with exceptional service. Your satisfaction is our commitment—a
              stay fueled by excellence.
            </p>
          </div>
          <div className="flex-1 order-0 lg:order-1 bg-b">
            <img
              className="w-full mx-auto"
              src="https://i.ibb.co/N695T8h/istockphoto-1439491500-612x612.png"
              alt="task"
            />
          </div>
        </div>
      </div>
    </>
  );
}
