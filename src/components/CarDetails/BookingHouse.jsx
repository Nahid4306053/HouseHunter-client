/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "../../Context/AuthnicationContext";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import Input from "../Input";
import moment from "moment";
export default function BookingHouse({ data }) {
  const AxiosSecureV1 = useAxiosSecureV1();
  const ClientQuery = useQueryClient();
  const { CurrentUser } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (formdata) => {
      const res = await AxiosSecureV1.post("/house/book", formdata);
      return res;
    },
    onSuccess: () => {
      Swal.fire({
        title: "House Booked Successfully",
        text: "Now Confirm payment In dashboard My Boooking!",
        icon: "success",
      });
      ClientQuery.invalidateQueries("FullHouseDetails");
    },
    onError: () => {
      toast.error("Failed to add Booking");
    },
  });

  const handelInfo = (form) => {
    if (CurrentUser) {
      form.preventDefault();
      const err = [];
      const Formdata = {};
      Formdata.start = new Date(form.target.start.value);
      Formdata.start.setHours(0, 0, 0, 0);
      Formdata.start = Formdata.start.toISOString();

      Formdata.end = new Date(form.target.end.value);
      Formdata.end.setHours(0, 0, 0, 0);
      Formdata.end = Formdata.end.toISOString();

      const start = new Date(Formdata.start);
      const end = new Date(Formdata.end);

      const timeDifference = end - start;

      const daysDifference = timeDifference / (1000 * 60 * 60 * 24) + 1;
      Formdata.totalPrice = daysDifference * (data.rent_per_month / 30);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const formattedDate = today.toISOString();

      if (
        formattedDate > Formdata.start ||
        formattedDate > Formdata.end
      ) {
        err.push("Start and End date Should be latest date");
        toast.error("Start and End date Should be latest date");
      }

      if (Formdata.start > Formdata.end) {
        err.push("End date Should be equal or greter then Pickup date");
        toast.error("End date Should be equal or greter then Pickup date");
      }

      if (err.length === 0) {
        Formdata.HouseData = data._id;
        Formdata.owner = data.owner;
        mutation.mutate(Formdata);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <form onSubmit={handelInfo} className="mt-8 space-y-4">
      {data.availabilityStatus === "Available" && <p className="Aviable-from">Available From {moment(data.availability_date).format('MMMM Do YYYY')}</p>}
      <Input customcss={"rounded-none"} type={"date"} min={new Date(data.availability_date).toISOString().split("T")[0]} name="start" label={"Start Date"} required ></Input>
      <Input customcss={"rounded-none"} type={"date"} min={new Date(data.availability_date).toISOString().split("T")[0]} name="end" label={"End Date"} required ></Input>
      <div>
        <button
          disabled={
            (data.availabilityStatus === "Available" ? false : true) ||
            (CurrentUser && CurrentUser.role === "House Owner" ? true : false)
          }
          className="btn mt-3 bg-sky-500   hover:bg-sky-500   w-full text-white"
        >
          {data.availabilityStatus === "Available"
            ? "Rent Now"
            : data.availabilityStatus}
        </button>
      </div>
    </form>
  );
}
