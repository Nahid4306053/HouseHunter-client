/* eslint-disable no-unused-vars */

import usePopularPost from "../../Hooks/usePopularPost";
import SmallError from "../shared/SmallError";
import SmallLoading from "../shared/SmallLoading";
import PopularpostCard from "./PopularpostCard";
export default function PopularPost() {
  const { PopularPost, error, isError, isLoading, isSuccess } =
    usePopularPost();

  return (
    <>
      <div className=" bg-[#eff6fb]   w-full  feed-back mt-5">
        {/* <!-- this is  header --> */}
        <h4 className="sub-title w-full border-l-4 border-sky-500   bg-black text-white px-5 py-3 text-xl font-bold ">
          Popular Posts
        </h4>
        {/* <!-- this is line --> */}
        {isLoading ? (
          <SmallLoading></SmallLoading>
        ) : isError ? (
          <SmallError></SmallError>
        ) : (
          PopularPost.data.Posts.map((ele) => {
            return <PopularpostCard data={ele} key={ele._id} />;
          })
        )}
      </div>
    </>
  );
}
