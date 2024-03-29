/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagetitle from "../../Hooks/Pagetitle";
import useUserPosts from "../../Hooks/useUserPosts";
import ApprovedPost from "../../components/Dashboard/HandelUserPost/ApprovedPost";
import RemovePost from "../../components/Dashboard/Posts/RemovePost";
import TableRow from "../../components/Dashboard/Posts/TableRow";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import TableFoot from "../../components/shared/TableFoot";

export default function HandelUserPost() {
  const [page, setpage] = useState(1);
  const { UserPosts, error, isError, isLoading, isSuccess } = useUserPosts(
    page,
    8
  );

  return (
    <div className="Posts p-5">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center bg-sky-500   clipshape2 shadow-lg">
          Manage Posts
          <Pagetitle> Manage Posts || HouseHunter</Pagetitle>
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>Banner</th>
              <th>Title</th>
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
              {UserPosts.data.Posts.length > 0 &&
                UserPosts.data.Posts.map((ele) => {
                  return (
                    <TableRow key={ele._id} data={ele}>
                      <td>
                        {ele.status === "Approved" && (
                          <Link to={`../../post-details/${ele._id}`}>
                            <button
                              data-tip="View Full Info"
                              className="btn text-info tooltip btn-ghost btn-xs text-lg "
                            >
                              <i className="fa-solid fa-square-info"></i>
                            </button>
                          </Link>
                        )}
                        <ApprovedPost id={ele._id}></ApprovedPost>
                        <RemovePost id={ele._id}></RemovePost>
                      </td>
                    </TableRow>
                  );
                })}
            </tbody>
          )}
          {UserPosts?.data?.totalData > 0 && (
            <TableFoot
              page={page}
              setpage={setpage}
              totalData={UserPosts?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
