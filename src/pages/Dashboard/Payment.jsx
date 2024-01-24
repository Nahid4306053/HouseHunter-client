/* eslint-disable no-unused-vars */
import { Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Pagetitle from "../../Hooks/Pagetitle";
import useCheckBooking from "../../Hooks/useCheckBooking";
import PaymentCardForm from "../../components/Payment/PaymentCardForm";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
// import { Divider } from '@mui/material'
// import { toast } from 'react-toastify'

export default function Payment() {
  const { id } = useParams();
  const { BookingData, error, isLoading, isSuccess, isError } =
    useCheckBooking(id);
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const current_date = date.toISOString();

  return (
    <div className="p-5">
      <div className="flex items-center flex-col justify-center">
        <h1 className="p-5 text-white px-10 text-2xl text-center  bg-sky-500    clipshape2 shadow-lg">
          <Pagetitle>Payment || HouseHunter</Pagetitle>
          Payment
        </h1>
        <div className="mt-10">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <SmallLoading />
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <SmallError></SmallError>
            </div>
          ) : BookingData.data ? (
            <div className="max-w-lg p-2 mb-10">
              <div className="packagedetails">
                <img src={BookingData.data.HouseData?.gallery[0]} alt="" />
                <h2 className="packName mt-4 text-lg flex justify-between">
                  <strong>House: </strong>
                  {BookingData.data.HouseData?.name + " "}
                  
                </h2>
                <h2 className="packName mt-2 text-lg flex justify-between">
                  <strong>Price: </strong> ${BookingData.data.totalPrice}
                </h2>
                {BookingData.data.start > current_date ? (
                  <div>
                    <Divider sx={{ my: 3 }} />
                    <h2 className="packName mt-3 text-lg flex justify-between">
                      <strong>Total Pay: </strong>{parseFloat(BookingData.data.totalPrice).toFixed(2)} TK.
                    </h2>
                    <PaymentCardForm
                      totalpay={BookingData.data.totalPrice}
                      booking_id={BookingData.data._id}
                      Houseid={BookingData.data.HouseData._id}
                      start={BookingData.data.start}
                      end={BookingData.data.end}
                    ></PaymentCardForm>
                  </div>
                ) : (
                  <h2 className="text-sky-500 text-lg mt-2">
                    The Date is Over
                  </h2>
                )}
              </div>
            </div>
          ) : (
            <h1 className="text-2xl text-center text-sky-500">
              Invalid Booking Id
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
