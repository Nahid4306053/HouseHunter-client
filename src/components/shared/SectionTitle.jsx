/* eslint-disable react/prop-types */

import { useMood } from "../../Context/TemplateMoodContext";

export default function SectionTitle({ title, subtitle, customcss }) {
  const { Darkmood } = useMood();
  return (
    <div
      className={`${
        customcss ? customcss : " text-center flex flex-col items-center"
      }  md:space-y-0 space-y-5`}
    >
      <h1
        className={`title   text-[38px] ${
          Darkmood ? "text-white" : "text-sky-500    "
        }  font-extrabold `}
      >
        {title}
      </h1>
      <div>
        <div className="my-5  h-[4px] w-[50px] bg-sky-500   "></div>
      </div>
      <h3 className="subtile    text-xl font-semibold"> {subtitle} </h3>
    </div>
  );
}
