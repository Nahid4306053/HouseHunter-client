/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagetitle from "../../Hooks/Pagetitle";
import useBookings from "../../Hooks/useBookings";
import ManageBookingsStatus from "../../components/Dashboard/Bookings/MangeBookingsStatus";
import TableRow from "../../components/Dashboard/Bookings/TableRow";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import TableFoot from "../../components/shared/TableFoot";

export default function ManageBookings() {
  const [page, setpage] = useState(1);
  const { Bookings, error, isError, isLoading, isSuccess } = useBookings(
    page,
    8
  );

  return (
    <div className="Houses p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-sky-500   clipshape2 shadow-lg">
          Manage Bookings
          <Pagetitle> Manage Bookings || HouseHunter</Pagetitle>
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>House Name</th>
              <th>Rent Date</th>
              <th>Total Price</th>
              <th>House Status</th>
              <th>Book Status</th>
              <th>Renter</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : (
            <tbody>
              {Bookings.data.Houses.length > 0 ? (
                Bookings.data.Houses.map((ele) => {
                  return (
                    <TableRow key={ele._id} data={ele}>
                      <td>
                        <div className="flex flex-col  gap-2">
                          <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                              <img src={ele.Renter?.avatar} alt="Avatar" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xs">
                              {ele.Renter?.username.slice(0, 10)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Link to={`/car-details/${ele._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-info tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                        <ManageBookingsStatus
                          id={ele._id}
                        ></ManageBookingsStatus>
                      </td>
                    </TableRow>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="flex flex-col items-center my-10">
                    <h2 className="text-xl">No Data Found</h2>
                    <Link to="../../Houses">
                      <button className="btn-sm btn bg-sky-500   hover:bg-sky-500   text-white">
                        View Houses
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          )}
          {Bookings?.data?.totalData > 0 && (
            <TableFoot
              colSpan={7}
              page={page}
              setpage={setpage}
              totalData={Bookings?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
