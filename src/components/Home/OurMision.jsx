/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

export default function OurMission() {
  const Benefits = [
    "Wide Range of Quality Homes",
    "User-Friendly Rental Process",
    "Personalized Property Recommendations",
    "Transparent Rental Agreements",
    "Responsive Customer Support",
    "Secure Online Payments",
    "Community-Centric Approach",
    "Continuous Improvement for Better Experiences",
  ];

  return (
    <div className="container mx-auto my-28">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-10">
        <div className="flex-1">
          <img
            className="w-full"
            src="https://i.ibb.co/QMLwx0n/HD-wallpaper-house-home-interior-beautiful-sunset-villa-clouds-sea-beach-nice-calm-luxury-view-ocean.jpg"
            alt="HouseHunter Banner"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold">
            Simplifying House Rentals for You
          </h1>
          <p className="leading-8">
            Welcome to HouseHunter, your go-to platform for hassle-free house
            rentals. Our mission is to make your home rental experience as
            smooth as possible. Explore a diverse range of quality homes and
            enjoy the following benefits when you choose HouseHunter:
          </p>
          <br />
          <ul className="list-disc ml-5 grid grid-cols-2 gap-6">
            {Benefits.map((ele, ind) => {
              return <li key={ind}>{ele}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
