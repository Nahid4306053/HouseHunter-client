import SectionTitle from "../shared/SectionTitle";

export default function WhyChooseUs() {
  const data = [
    {
      "title": "Diverse Property Options",
      "icon": "fas fa-home",
      "description": "Explore a diverse range of rental properties: Choose from cozy apartments to spacious houses, ensuring there's a perfect home for every lifestyle."
    },
    {
      "title": "Transparent Pricing",
      "icon": "fas fa-money-check",
      "description": "Clear and competitive rates: Enjoy transparent pricing with no hidden fees. We strive to offer the best value for your rental budget."
    },
    {
      "title": "User-Friendly Booking",
      "icon": "fas fa-book",
      "description": "Simple and secure: Our user-friendly platform makes booking your rental property a breeze. A few clicks are all it takes to secure your dream home for the stay ahead."
    }
  ];
  return (
    <div className="my-28">
      <SectionTitle
        title={"Why Choose us"}
        subtitle={
          "Experience Unmatched Comfort and Convenience in Every Home"
        }
      ></SectionTitle>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 lg:gap-20 gap-10 ">
          {data.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="text-center p-5 py-10 transition-all group hover:cursor-pointer hover:bg-sky-500   hover:text-white"
              >
                <i
                  className={`${ele.icon} group-hover:text-white text-sky-500   text-5xl`}
                ></i>
                <h3 className="text-xl font-semibold  mt-5">{ele.title}</h3>
                <div>
                  <div className="my-7 h-[2px] w-[50px] group-hover:bg-white bg-sky-500   mx-auto"></div>
                </div>
                <p className="leading-8 ">{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
