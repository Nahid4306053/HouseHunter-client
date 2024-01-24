/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";

export default function ChangeStatus({ id, status }) {
  const [newStatus, SetNewStatus] = useState(status);
  const AxioSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await AxioSecureV1.patch(`/house/status/${id}`, {
        availabilityStatus: newStatus,
      });
      return res;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries("housesData");
      toast.success("The Status Changed Successfully");
    },
    onError: () => {
      toast.error("The Status Changed Failed");
    },
  });
  return (
    <div className=" dropdown dropdown-top dropdown-left">
      <button
        data-tip="Change Status "
        className="btn text-sky-500   tooltip btn-ghost btn-xs text-lg "
      >
        <i tabIndex={0} className="fa-regular fa-chart-mixed"></i>
      </button>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] housed housed-compact rounded-none w-64 p-2 shadow text-primary-content bg-base-300"
      >
        <div className="housed-body">
          <select
            value={newStatus}
            onChange={(e) => SetNewStatus(e.target.value)}
            className="select text-sky-500   focus:outline-none select-error w-full max-w-xs"
          >
            <option value={"Available"}>Available</option>
            <option value={"Booked"}>Booked</option>
            <option value={"Maintenance"}>Maintenance</option>
          </select>
          <div className="flex justify-end">
            <button
              onClick={() => mutation.mutate()}
              disabled={newStatus === status ? true : false}
              className="btn-sm btn mt-2 btn-error capitalize text-white"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
