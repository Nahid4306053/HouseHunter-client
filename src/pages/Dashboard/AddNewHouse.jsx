/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";

import UploadIMG from "../../Utils/UploadIMG";

import { useMutation } from "@tanstack/react-query";
import { forEach } from "lodash";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Pagetitle from "../../Hooks/Pagetitle";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import DragAndDropImg from "../../components/Dashboard/ManageCar/DragAndDropImg";
import Input from "../../components/Input";
import HeadTitle from "../../components/shared/HeadTitle";

export default function AddNewHouse() {
  const [Errors, setErrors] = useState([]);
  const formref = useRef();
  const Axios = useAxiosSecureV1();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await Axios.post("/house/add", data);
      return res;
    },
    onSuccess: () => {
      toast.success("House Added SuccessFully");
      navigate("/dashboard/manage-houses");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const {
    acceptedFiles,
    getRootProps,
    fileRejections,
    getInputProps,
    inputRef,
  } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 1048576,
    maxFiles: 15,
  });

  const handelData = async (form) => {
    form.preventDefault();
    const err = [];
    const formData = {};
    const PhonePattern = /^(01[3-9]\d{8}|018[0-9]\d{7})$/;
    const galleryimges = acceptedFiles;

    formData.name = form.target.name.value.trim();
    formData.address = form.target.address.value.trim();
    formData.city = form.target.city.value.trim();
    formData.bedrooms = parseInt(form.target.bedrooms.value.trim(), 10);
    formData.bathrooms = parseInt(form.target.bathrooms.value.trim(), 10);
    formData.room_size = parseInt(form.target.room_size.value.trim(), 10);
    formData.availability_date = form.target.availability_date.value.trim();
    formData.rent_per_month = parseInt(
      form.target.rent_per_month.value.trim(),
      10
    );
    formData.phone_number = form.target.phone_number.value.trim();
    formData.description = form.target.description.value.trim();

    if (galleryimges.length < 3) {
      err.push("Upload Minimam 3 gallery img");
      toast.error("Upload Minimam 3 gallery img");
    }

    const numbers = ["bedrooms", "bathrooms", "room_size", "rent_per_month"];
    forEach(formData, (value, key) => {
      if (numbers.includes(key)) {
        if (value < 1) {
          err.push(`Please give a positive value in ${key}`);
        }
      }

      if (value === "") {
        err.push(`The ${key} data is Required`);
      }

      if (key == "phone_number") {
        if (!PhonePattern.test(value)) {
          err.push(`Please Provide a Bangladeshi Number`);
        }
      }

      if (key == "description") {
        if (value.length < 150) {
          err.push("Description Should be Minimam 150 character");
        }
      }
    });

    if (err.length === 0) {
      setErrors([]);

      try {
        let gallery = await Promise.all(
          [...Array(acceptedFiles.length).keys()].map(async (ele, ind) => {
            const result = await UploadIMG(acceptedFiles[ind]);
            if (result.data.data.display_url) {
              return result.data.data.display_url;
            }
          })
        );

        if (gallery.length === acceptedFiles.length) {
          mutation.mutate({ ...formData, gallery });
        } else {
          toast.error("A problem occured whene save img");
        }
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      setErrors(err);
      if (formref.current) {
        formref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <Pagetitle> Add New House || HouseHunter</Pagetitle>
      <form ref={formref} onSubmit={handelData} className="p-10">
        <HeadTitle></HeadTitle>
        <div className="bannerarea relative   w-full  rounded-lg overflow-hidden">
          <DragAndDropImg
            acceptedFiles={acceptedFiles}
            getRootProps={getRootProps}
            fileRejections={fileRejections}
            getInputProps={getInputProps}
          ></DragAndDropImg>
        </div>
        <div className="w-full">
          {Errors.length > 0 && (
            <div className="erorrs  text-red-500    my-4 bg-red-200 p-4 rounded-lg">
              <ul className="list-disc grid gap-2">
                {Errors.map((ele, ind) => {
                  return (
                    <li key={ind} className="capitalize  ml-4">
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:grid lg:grid-cols-2   space-y-5 lg:space-y-0  gap-5 mt-5">
          <Input label={"House Name"} type={"text"} name="name" placeholder={"House Name"} required ></Input>
          <Input label={"Address"} type={"text"} name="address" placeholder={"Address"} required ></Input>
          <Input label={"City"} type={"text"} name="city" placeholder={"City"} required ></Input>
          <Input label={"Rent Per Month (TK)"} type={"number"} name="rent_per_month" placeholder={"Set Rent Per Month"} required ></Input>

          <div className="grid gap-5 col-span-2 md:grid-cols-3 grid-cols-1">
            <Input label={"Bed Rooms"} type={"number"} name="bedrooms" placeholder={"Bed Rooms"} required ></Input>
            <Input label={"Bath Rooms"} type={"number"} name="bathrooms" placeholder={"Bath Rooms"} required ></Input>
            <Input label={"Room Size (ft)"} type={"number"} name="room_size" placeholder={"Room Size"} required ></Input>
          </div>

          <Input label={"Phone Number"} type={"number"} name="phone_number" placeholder={"Contact Phone Number"} required ></Input>

          <Input label={"Availability date"} type={"date"} min={new Date().toISOString().split("T")[0]} name="availability_date" placeholder={"availability_date"} required ></Input>

          <div className="form-control col-span-2">
            <label className="label"> <span className=" label-text text-lg font-bold">Description</span> </label>
           <textarea required rows={5} className="textarea placeholder:text-black bg-transparent text-lg textarea-bordered border-black" name="description" placeholder="Write About the House" ></textarea>
          </div>
          <div className="col-span-2">
            <button className="btn w-full bg-sky-500   text-white hover:bg-sky-500   mt-5"> {mutation.isPending ? "Loading..." : "Add now"} </button>
          </div>
        </div>
      </form>
    </>
  );
}
