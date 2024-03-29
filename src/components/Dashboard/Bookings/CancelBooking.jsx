/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";

export default function CancelBooking({ id }) {
  const AxioSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await AxioSecureV1.delete(`/house/book/cancel/${id}`);
      return res;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries(["MyBookings", "useUpcomingBook"]);
      Swal.fire({
        title: "Canceled!",
        text: "The booking Cancel Successfully",
        icon: "success",
      });
    },
    onError: () => {
      toast.error("The booking Cancel Failed");
    },
  });
  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate();
      }
    });
  };
  return (
    <button
      onClick={handelDelete}
      data-tip="Cancel Booking"
      className="btn text-sky-500   tooltip btn-ghost btn-xs text-lg "
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
}
