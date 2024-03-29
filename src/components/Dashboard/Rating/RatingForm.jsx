/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import Rating from "react-rating";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../Context/AuthnicationContext";
import { useMood } from "../../../Context/TemplateMoodContext";
import Pagetitle from "../../../Hooks/Pagetitle";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";
export default function RatingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { CurrentUser } = useAuth();
  const AxiosSecureV1 = useAxiosSecureV1();
  const formref = useRef();

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await AxiosSecureV1.post("/review", data);
      return res;
    },
    onError: (err) => {
      console.log(err)
      toast.error("Failed to drop review");
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("HouseRiview");
      toast.success("Review added SuccessFully");
      formref.current.reset();
      setRating();
      navigate(`../../car-details/${id}`);
    },
  });
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handelReviewData = (form) => {
    form.preventDefault();
    if (CurrentUser) {
      const formdata = {};
      formdata.review = form.target.review.value.trim();
      formdata.rating = rating;
      formdata.HouseData = id;
      if (!formdata.rating) {
        toast.error("Please provide a rating");
      } else if (!formdata.review) {
        toast.error("Please Write Your Words");
      } else {
        mutation.mutate(formdata);
      }
    } else {
      navigate("/login");
    }
  };
  const { Darkmood } = useMood();
  return (
    <div className="px-10">
      <div className="text-center overflow-y-auto  my-14 flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xltext-center text-xl bg-sky-500     clipshape2 shadow-lg">
          Review
          <Pagetitle>Review || HouseHunter</Pagetitle>
        </h1>
      </div>
      <form
        ref={formref}
        onSubmit={handelReviewData}
        className={`mt-5 ${Darkmood ? "bg-base-300" : ""}  bg-opacity-70 p-7`}
      >
        <h1 className="text text-xl ">Hover in Star and Give Rating</h1>
        <div className="text-2xl text-yellow-500 mt-3">
          <Rating
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            fractions={2}
            initialRating={rating}
            onChange={handleRatingChange}
          />
        </div>
        <h1 className="text text-xl mt-7">Write Your Words</h1>
        <textarea
          rows={7}
          className="placeholder:text-base textarea bg-transparent border-black placeholder:text-black mt-4 w-full row rounded-none textarea-bordered"
          required
          placeholder="Write Your Words about The House "
          name="review"
        ></textarea>
        <button
          type="submit"
          disabled={CurrentUser && CurrentUser.role !== "House Renter"}
          className="btn bg-sky-500   hover:bg-sky-500   text-white mt-5"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
