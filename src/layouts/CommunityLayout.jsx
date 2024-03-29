import { Link, Outlet } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import PopularPost from "../components/PostDetails/PopularPost";
import PageBanner from "../components/shared/PageBanner";

export default function CommunityLayout() {
  ScrollTop();
  return (
    <div>
      <Pagetitle>Community Hub || HouseHunter</Pagetitle>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/hB1XkNP/community.png"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            Our Community Hub
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Explore the journey experiences of our community members with our
            cars
          </h3>
        </div>
      </PageBanner>
      <div className="container mx-auto my-28">
        <div className="grid grid-cols-3 ">
          <div className="xl:col-span-2 col-span-full xl:mr-14 ">
            <Outlet></Outlet>
          </div>
          <div className="xl:col-span-1 col-span-full ">
            <PopularPost></PopularPost>
            <div className="mt-14">
              <Link to={"/cars"}>
                <img src="https://i.ibb.co/hVLxxb9/add.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
