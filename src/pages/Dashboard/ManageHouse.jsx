/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagetitle from "../../Hooks/Pagetitle";
import useHouseData from "../../Hooks/useHouseData";
import ChangeStatus from "../../components/Dashboard/ManageCar/ChangeStatus";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import TableFoot from "../../components/shared/TableFoot";
import TableRow from "../../components/shared/TableRow";
export default function ManageHouse() {
  const [page, setpage] = useState(1);
  const { HouseData, error, isError, isLoading, isSuccess } = useHouseData(
    page,
    8
  );

  return (
    <div className="houses p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-sky-500   clipshape2 shadow-lg">
          Manage houses
          <Pagetitle> Manage houses || HouseHunter</Pagetitle>
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>House Name</th>
              <th>City</th>
              <th>Rent (Per Mounth)</th>
              <th>Status</th>
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
              {HouseData.data.houses.length > 0 &&
                HouseData.data.houses.map((ele) => {
                  return (
                    <TableRow key={ele._id} data={ele}>
                      <td>
                        <Link to={`/house-details/${ele._id}`}>
                          <button
                            data-tip="View Full Info"
                            className="btn text-sky-500   tooltip btn-ghost btn-xs text-lg "
                          >
                            <i className="fa-solid fa-square-info"></i>
                          </button>
                        </Link>
                        <ChangeStatus
                          id={ele._id}
                          status={ele.availabilityStatus}
                        ></ChangeStatus>
                      </td>
                    </TableRow>
                  );
                })}
            </tbody>
          )}
          {HouseData?.data?.totalData > 0 && (
            <TableFoot colSpan={5} page={page} setpage={setpage} totalData={HouseData?.data?.totalData} ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
