/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthnicationContext";
import { useMood } from "../../Context/TemplateMoodContext";

export default function Sidebar() {
  const { Darkmood } = useMood();
  const { CurrentUser } = useAuth();
  const { role } = CurrentUser;

  return (
    <>
      <div className="pt-10  text-white">
        <div className="sidebar main_NavLinks space-y-1 text-lg font-sem ">
          <div className="xl:w-[90%]  w-[73%]  mx-auto ">
            <NavLink className="px-5" to="/dashboard/profile">
              <i className=" md:ml-1 ml-[2px]  fa-light fa-user-vneck mr-2 w-5"></i>
              <span className=" manu_item text-start lg:inline">
                My Profile
              </span>
            </NavLink>
          </div>

          {role === "House Renter" && (
            <>


              <div className="xl:w-[90%]  w-[73%]  mx-auto ">
                <NavLink className="px-5" to="/dashboard/my-bookings">
                  <i className=" md:ml-1 ml-[2px]  fa-regular fa-cart-shopping mr-2 w-5"></i>
                  <span className=" manu_item text-start lg:inline">
                    Booking History
                  </span>
                </NavLink>
              </div>


              <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
                <NavLink className="px-5" to="/dashboard/payment-history">
                  <i className=" md:ml-1 ml-[2px]  fa-brands fa-cc-amazon-pay mr-2 w-5"></i>
                  <span className="manu_item text-start lg:inline">
                    Payment History
                  </span>
                </NavLink>
              </div>
            </>
          )}

          {role === "House Owner" && (
            <>
              <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
                <NavLink className="px-5" to="/dashboard/add-house">
                  <i className=" md:ml-1 ml-[2px]  fa-regular fa-house-chimney-medical mr-2 w-5"></i>
                  <span className=" manu_item text-start lg:inline">
                    Add New House
                  </span>
                </NavLink>
              </div>

              <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
                <NavLink className="px-5" to="/dashboard/manage-houses">
                  <i className=" md:ml-1 ml-[2px]  fa-regular fa-house-flood-water-circle-arrow-right mr-2 w-5"></i>
                  <span className=" manu_item text-start lg:inline">
                    Manage Houses
                  </span>
                </NavLink>
              </div>

              <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
                <NavLink className="px-5" to="/dashboard/manage-bookings">
                  <i className=" md:ml-1 ml-[2px] fa-regular fa-house-circle-check mr-2 w-5"></i>
                  <span className=" manu_item text-start lg:inline">
                    Manage Bookings
                  </span>
                </NavLink>
              </div>
            </>
          )}

          <div className=" xl:w-[90%]  w-[73%]  mx-auto ">
            <NavLink className="px-5" to="/dashboard/profile-settings">
              <i className=" md:ml-1 ml-[2px]  fa-regular fa-head-side-gear mr-2 w-5"></i>
              <span className=" manu_item text-start lg:inline">
                Profile Settings
              </span>
            </NavLink>
          </div>
        </div>

        <div className="divide h-[1px] my-7 lg:my-5 bg-white "></div>
        <div className="others_NavLinks  text-lg font-sem ">
          <div className="xl:w-[90%]  w-[73%]  mx-auto">
            <NavLink className="px-5 py-3" to="/">
              <i className=" md:ml-1 ml-[2px]  fa-solid fa-house mr-2 w-5"></i>
              <span className=" manu_item text-start lg:inline">Home</span>
            </NavLink>
          </div>

          <div className="xl:w-[90%]  w-[73%]  mx-auto">
            <NavLink className="px-5  py-3" to="/dashboard/announcements">
              <i className=" md:ml-1 ml-[2px]  fa-sharp fa-regular fa-bullhorn mr-2 w-5"></i>
              <span className=" manu_item text-start lg:inline">
                New Offers
              </span>
            </NavLink>
          </div>

          <div className="xl:w-[90%]  w-[73%]  mx-auto">
            <NavLink className="px-5 py-3" to="/dashboard/settings">
              <i className=" md:ml-1 ml-[2px]  fa-regular fa-gear mr-2 w-5"></i>
              <span className="manu_item lg:inline">Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
