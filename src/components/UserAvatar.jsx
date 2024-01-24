import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import { useMood } from "../Context/TemplateMoodContext";
import user from "/images/user.png";
export default function UserAvatar() {
  const { signout, CurrentUser, getCurrentUser } = useAuth();
  const navigate = useNavigate();
  const userName = CurrentUser.username || "";
  const { Darkmood } = useMood();
  const handlsignout = async () => {
    try {
      await signout();
      navigate("/login");
      getCurrentUser();
      toast.success(`${userName} Log Out SuccessFully`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="avatar   dropdown cursor-pointer  dropdown-hover ">
      <div
        className={`w-12 rounded-full ring ${
          Darkmood ? "" : "ring-white  "
        }  ring-offset-base-100 ring-offset-2`}
      >
        <img
          tabIndex={0}
          src={CurrentUser.avatar ? CurrentUser.avatar : user}
        />
      </div>
      <div
        tabIndex={0}
        className={`dropdown-content  rounded-lg z-[1] -translate-x-44  text-center  left-0 p-4 shadow-2xl ${
          Darkmood ? "bg-base-300" : "bg-sky-100"
        } h-[340px] w-64`}
      >
        <div className="avatar w-full text-start  flex justify-center">
          <div
            className={`w-24 rounded-full ring ${
              Darkmood ? "" : "ring-sky-500    "
            }  ring-offset-base-100 ring-offset-2`}
          >
            <img src={CurrentUser.avatar ? CurrentUser.avatar : user} />
          </div>
        </div>

        <div className="text-start space-y-2 ">
          <div
            className={` space-x-1 mt-4 ${
              Darkmood ? "text-yellow-400 " : "text-sky-500    "
            }`}
          >
            <strong>Name: </strong>
            <span className="break-words ">
              {CurrentUser ? CurrentUser.username.slice(0, 15) : "Not Found"}
            </span>
          </div>
          <div
            className={`${
              Darkmood ? "text-yellow-400 " : "text-sky-500    "
            } space-x-1 flex`}
          >
            <strong> Email: </strong>
            <span className="break-words">
              {CurrentUser ? CurrentUser.email.slice(0, 15) : "Not Found"}
            </span>
          </div>
        </div>
        <hr className={`border mt-2 border-sky-400  border-opacity-5 `} />
        <div
          className={`text-start  mt-4 space-y-2 text-lg font-bold ${
            Darkmood ? "text-yellow-400 " : "text-sky-500    "
          } `}
        >
          <div>
            <Link className="space-x-5" to="/dashboard/profile">
              <i className="fa-solid fa-chart-mixed"></i> Dashboard
            </Link>
          </div>
          <div>
            <Link className="space-x-5" to="/dashboard/announcements">
              <i className="fa-regular fa-bullhorn mr-2"></i>New Offers
            </Link>
          </div>
        </div>
        <hr className={`border mt-2 border-sky-400  border-opacity-5 `} />
        <div
          className={`text-start  mt-3 space-y-2 text-lg font-bold ${
            Darkmood ? "text-yellow-400 " : "text-sky-500    "
          } `}
        >
          <div>
            <div onClick={handlsignout}>
              <i className="fa-solid fa-right-from-bracket"></i> Log Out
            </div>
          </div>
        </div>

        <div className="flex  mt-2 gap-4">{/* onClick={handlsignout} */}</div>
      </div>
    </div>
  );
}
