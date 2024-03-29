/* eslint-disable react/no-unescaped-entities */

import { useMood } from "../Context/TemplateMoodContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import Input from "../components/Input";
import PageBanner from "../components/shared/PageBanner";

export default function ContactUs() {
  ScrollTop();
  const { Darkmood } = useMood();
  return (
    <>
      <Pagetitle>Contact us || HouseHunter</Pagetitle>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/XDVQxpQ/road-trip-convertible-750x400.jpg"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
            Coutact Us
          </h1>

          <h3 className="md:text-xl text-xl text-white italic">
            Rent Your Dream House Today - Seamless, Reliable, Unforgettable
          </h3>
        </div>
      </PageBanner>
      <div className="my-28  container gap-10 mx-auto flex flex-col md:flex-row">
        <div className="flex-1 conatct_info my-5">
          <div className="meadia">
            <div className="meadia-body grid gap-2">
              <h1
                className={`text-4xl font-bold ${
                  Darkmood ? "text-sky-400" : "text-sky-500    "
                }`}
              >
                Contact Us
              </h1>
              <h1 className="text-xl   text-black   font-semibold">
                Let us know what you think
              </h1>
              <p className="text-lg">
                We are here to help you with any questions you may have.
              </p>
            </div>
          </div>
          {/* contact  numebr*/}
          <div className="flex flex-col  gap-10 mt-8">
            <div className="flex items-center gap-4">
              <div
                className={` icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20  ${
                  Darkmood ? "border-sky-400" : "border-sky-500    "
                }  border-2`}
              >
                <i
                  className={`  ${
                    Darkmood ? "text-sky-400" : "text-sky-500    "
                  }     fa-regular fa-phone-volume`}
                ></i>
              </div>
              <div className="det">
                <h3 className="text-xl   text-black   font-semibold">
                  Call us directly
                </h3>
                <p className="text-lg  opacity-70"> (+88) 01954849695</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={` icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20  ${
                  Darkmood ? "border-sky-400" : "border-sky-500    "
                }  border-2`}
              >
                <i
                  className={`  ${
                    Darkmood ? "text-sky-400" : "text-sky-500    "
                  }     fa-regular fa-fax`}
                ></i>
              </div>
              <div className="det">
                <h3 className="text-xl   text-black   font-semibold">Fax us</h3>
                <p className="text-lg  opacity-70"> (+88) 1757 555 1234</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={` icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20  ${
                  Darkmood ? "border-sky-400" : "border-sky-500    "
                }  border-2`}
              >
                <i
                  className={`  ${
                    Darkmood ? "text-sky-400" : "text-sky-500    "
                  }     fa-regular fa-envelope`}
                ></i>
              </div>
              <div className="det">
                <h3 className="text-xl   text-black   font-semibold">
                  Mail us
                </h3>
                <p className="text-lg  opacity-70"> ku4306053@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={` icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20  ${
                  Darkmood ? "border-sky-400" : "border-sky-500    "
                }  border-2`}
              >
                <i
                  className={`  ${
                    Darkmood ? "text-sky-400" : "text-sky-500    "
                  }     fa-sharp fa-regular fa-location-dot`}
                ></i>
              </div>
              <div className="det">
                <h3 className="text-xl   text-black   font-semibold">
                  Vist our place
                </h3>
                <p className="text-lg  opacity-70">
                  Jln Cempaka Wangi No 22 <br /> Dhaka , Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 ${
            Darkmood ? "bg-base-300" : "bg-sky-100"
          }  p-14 rounded-lg"`}
        >
          <div className="header">
            <div
              className={`text-4xl my-5 flex gap-5 ${
                Darkmood ? "text-sky-400" : "text-sky-500    "
              }  flex-wrap justify-between font-bold`}
            >
              <p>Let's Talk</p>
            </div>
          </div>
          <div className="card  flex-shrink-0 w-full ">
            <form className="grid  lg:grid-cols-2  gap-4">
              <Input
                placeholder="Name"
                label="Name"
                type="text"
                customcss="border-sky-300 border-2  focus:outline-none"
              />

              <Input
                placeholder="Phone"
                label="Phone"
                type="tel"
                customcss="border-sky-300 border-2 focus:outline-none "
              />

              <div className="col-span-full">
                <Input
                  placeholder="Email"
                  label="Email"
                  type="email"
                  customcss=" border-sky-300 border-2  focus:outline-none"
                />
              </div>

              <div className="form-control col-span-full">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows={5}
                  className="border-sky-300 h-full border-2 textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-control mt-3 col-span-full ">
                <button className="btn bg-sky-500   hover:bg-sky-500   text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
