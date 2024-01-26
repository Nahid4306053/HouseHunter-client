/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import useFilterData from "../Hooks/useFilterData";
import BrandFilter from "../components/Filter/HouseFilter";
import HandelFilter from "../components/Filter/HandelFilter";
import Pagination from "../components/Filter/Pagination";
import PriceFilter from "../components/Filter/PriceFilter";
import SelectOption from "../components/Filter/SelectOption";

import PageBanner from "../components/shared/PageBanner";
import HouseDetailsCard from "../components/shared/HouseDetailsCard";
import SmallError from "../components/shared/SmallError";
import SmallLoading from "../components/shared/SmallLoading";
import SearchBar from "../components/Home/SearchBar";

export default function Houses() {
  ScrollTop();
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setpage] = useState(1);
  const { FilterData, error, isError, isLoading, isSuccess } = useFilterData(
    page,
    9,
    search || "?"
  );
  
  useEffect(() => {
    if (search) { 
      setpage(1);
    }
  }, [search]);
  return (
    <div>
      <Pagetitle> Our House Collections || HouseHunter</Pagetitle>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/sqzjG6Z/maison-moderne-au-coucher-du-soleil-piscine-845712-691.jpg"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            Our House Collections
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Rent Your Dream House Today - Seamless, Reliable, Unforgettable
          </h3>
          <br />
          <SearchBar></SearchBar>
        </div>
      </PageBanner>
      <div className="container my-28  mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="xl:col-span-3 border-t-8 lg:col-span-4 col-span-12 order-1 lg:order-0  p-5">
            <SelectOption
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            ></SelectOption>
            <PriceFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            ></PriceFilter>
            <BrandFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            ></BrandFilter>
          </div>
          <div className="xl:col-span-9 lg:col-span-8 col-span-12 order-0 lg:order-1">
            <HandelFilter totaldata={FilterData?.data.totalData}></HandelFilter>
            {isLoading ? (
              <div className="w-full flex justify-center">
                <SmallLoading />
              </div>
            ) : isError ? (
              <div className="w-full flex justify-center">
                <SmallError></SmallError>
              </div>
            ) : FilterData.data.houses.length > 0 ? (
              <>
                <div className="grid mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {FilterData.data.houses &&
                    FilterData.data.houses.map((ele) => {
                      return (
                        <HouseDetailsCard
                          customcss={"text-xl pt-20"}
                          key={ele._id}
                          data={ele}
                        ></HouseDetailsCard>
                      );
                    })}
                  <div className="col-span-3 mt-14 mx-auto">
                    <Pagination
                      page={page}
                      setpage={setpage}
                      totalData={FilterData.data.totalData}
                    ></Pagination>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-2xl text-sky-500   text-center mt-10">
                No Data Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
