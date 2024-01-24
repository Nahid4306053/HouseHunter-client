/* eslint-disable no-unused-vars */

import useMyPaymentHistory from "../../Hooks/usePaymentHistory";
import PaymetTablerow from "../../components/Payment/PaymentTableRow";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";

import { useState } from "react";
import { Link } from "react-router-dom";
import Pagetitle from "../../Hooks/Pagetitle";
import TableFoot from "../../components/shared/TableFoot";

export default function MyPaymentHistory() {
  const [page, setpage] = useState(1);
  const { MyPaymentHistory, error, isError, isLoading, isSuccess } =
    useMyPaymentHistory(1, 8);

  return (
    <div className="paymentHisTory p-6">
      <div className="text-center overflow-y-auto flex justify-center text-white">
        <h1 className="p-5 px-10 text-2xl text-center  bg-sky-500     clipshape2 shadow-lg">
          My Payment History
          <Pagetitle>Payment History || HouseHunter</Pagetitle>
        </h1>
      </div>
      <div className="overflow-x-auto custom-scrollbar table-pin-rows lg:h-[550px] mt-12  bg- md:h-[600px] h-[400px]">
        <table className="table  border-white ">
          <thead className="h-14  text-sm">
            <tr>
              <th>House Name</th>
              <th>Rent Date</th>
              <th>Transection Id</th>
              <th>Total pay</th>
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
              {MyPaymentHistory.data.PaymentHistorys.length > 0 ? ( 
                MyPaymentHistory.data.PaymentHistorys.map((ele) => {
                  return (
                    <PaymetTablerow key={ele._id} data={ele}></PaymetTablerow>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-10 text-center ">
                    <h3 className="my-3 text-xl ">
                      Your Payment Histroy is Empty
                    </h3>
                    <Link to="../../houses">
                      <button className="btn bg-sky-500   hover:bg-sky-500   text-white capitalize btn-sm">
                        Visit Our Houses Page
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          )}
          {MyPaymentHistory?.data?.totalData > 0 && (
            <TableFoot
              colSpan={6}
              page={page}
              setpage={setpage}
              totalData={MyPaymentHistory?.data?.totalData}
            ></TableFoot>
          )}
        </table>
      </div>
    </div>
  );
}
