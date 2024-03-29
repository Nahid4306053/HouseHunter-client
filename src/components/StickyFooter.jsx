import React from "react";
import useAos from "../Hooks/useAos";
import AuthInputBox from "../components/shared/AuthInputBox";
export default function StickyFooter() {
  useAos();
  return (
    <div className="StickyFooter">
      <div className="container  mx-auto">
        <div className=" p-10 -mt-48 text-center rounded-lg bg-sky-100 shadow-lg relative">
          <div className="relative z-10">
            <div className="text-center  space-y-5">
              <h1 className="text-4xl font-bold text-sky-500    font-Montserrat">
                Join our newsletter
              </h1>
              <h3 className="text-lg max-w-xl mx-auto">
                Stay in the loop with our latest updates, exclusive offers, and
                exciting news. Join our newsletter family today!
              </h3>
            </div>
            <div className="newleetrform max-w-md mx-auto">
              <AuthInputBox placeholder="Your Email Address">
                <p className="font-Montserrat font-semibold capitalize">
                  subscribe
                </p>
              </AuthInputBox>
            </div>
          </div>
          <div className="shape top-0 left-0 clipshape3 absolute h-full w-full bg-sky-200"></div>
        </div>
      </div>
    </div>
  );
}
