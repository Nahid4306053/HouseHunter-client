/* eslint-disable no-unused-vars */
import useFilterData from "../../Hooks/useFilterData";
import HouseDetailsCard from "../shared/HouseDetailsCard";
import SectionTitle from "../shared/SectionTitle";
import SmallError from "../shared/SmallError";
import SmallLoading from "../shared/SmallLoading";

export default function RentalHousesection() {
  const { FilterData, error, isError, isLoading, isSuccess } = useFilterData(1, 6);
  
  return (
    <div className="container mx-auto my-28">
      <div className="mb-24">
        <SectionTitle
          title={"Our Rental Fleets "}
          subtitle={"Elevating Your Journey with Our Exceptional Rental Fleets"}
        ></SectionTitle>
      </div>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <SmallLoading />
        </div>
      ) : isError ? (
        <div className="w-full flex justify-center">
          <SmallError></SmallError>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {FilterData.data.houses &&
            FilterData.data.houses.map((ele) => {
              return <HouseDetailsCard key={ele._id} data={ele}></HouseDetailsCard>;
            })}
        </div>
      )}
    </div>
  );
}
