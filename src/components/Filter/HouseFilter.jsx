/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";

export default function HouseFilter({ setSearchParams, searchParams }) {
  const [BedRooms, setBedRooms] = useState([1,2,3,4,5,6,7]);
  const [BathRooms, setBathRooms] = useState([1,2,3,4,5,6,7]);
  const [selctedBedRoom, setSelectedBedRoom] = useState();
  const [selctedBathRoom, setSelectedBathRoom] = useState();


  const { search } = useLocation();
  const Axios = useAxiosSecureV1();

  useEffect(() => {
    if (selctedBedRoom) {
      setSearchParams((old) => {
        old.set("BedRoom", selctedBedRoom);
        return old;
      });
    }
  }, [selctedBedRoom]);  
  
  useEffect(() => {
    if (selctedBathRoom) {
      setSearchParams((old) => {
        old.set("BathRoom", selctedBathRoom);
        return old;
      });
    }
  }, [selctedBathRoom]);


  useEffect(() => {
    if (!searchParams.get("BedRoom")) {
      setSelectedBedRoom();
    }   
     if (!searchParams.get("BathRoom")) {
      setSelectedBathRoom();
    }
  }, [search]);

  return (
    <div>
      <div className="BedRooms ">
        <h1 className="text-2xl  font-bold">Bed Rooms</h1>
        {BedRooms.length > 0 && (
          <ul className="text-lg mt-5 space-y-2">
            {BedRooms.map((ele, ind) => {
              return (
                <li
                  onClick={() => setSelectedBedRoom(ele)}
                  key={ind}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <div
                    className={`h-4 w-4 border-2 ${
                      selctedBedRoom == ele && "bg-sky-500  "
                    } border-sky-500  `}
                  ></div>
                  {ele}
                </li>
              );
            })}
          </ul>
        )}
      </div>     
      
       <div className="BedRooms mt-5">
        <h1 className="text-2xl  font-bold">Bath Rooms</h1>
        {BathRooms.length > 0 && (
          <ul className="text-lg mt-5 space-y-2">
            {BathRooms.map((ele, ind) => {
              return (
                <li
                  onClick={() => setSelectedBathRoom(ele)}
                  key={ind}
                  className="flex gap-4 items-center cursor-pointer" 
                >
                  <div
                    className={`h-4 w-4 border-2 ${
                      selctedBathRoom == ele && "bg-sky-500  "
                    } border-sky-500  `}
                  ></div> 
                  {ele}
                </li>
              );
            })}
          </ul>
        )}
      </div>

     
    </div>
  );
}
