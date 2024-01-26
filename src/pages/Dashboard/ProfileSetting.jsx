/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useAuth } from "../../Context/AuthnicationContext";
import Input from "../../components/Input";

import { toast } from "react-toastify";
import Pagetitle from "../../Hooks/Pagetitle";
import useAxios from "../../Hooks/useAxiosSecureV1";
import uploadIMGBB from "../../Utils/UploadIMG";
export default function ProfileSetting() {
  const [readmood, setReadmood] = useState(true);
  const { CurrentUser } = useAuth();
  const [UploadIMG, setUploadIMG] = useState();
  const { username, email, avatar, additionalInfo } = CurrentUser || {};
  const [profilepic, setProfilepic] = useState(avatar);
  const { UpdateProfile } = useAuth();
  const [forminfo, setFormInfo] = useState({
    username,
    email,
    avatar,
    additionalInfo,
  });
  const Axios = useAxios();

  const handelData = async (form) => {
    form.preventDefault();
    const formdata = {};
    const err = [];
    formdata.username = form.target.username.value.trim();
    formdata.additionalInfo = form.target.additionalInfo.value.trim();
    const avatar = form.target.avatar.files;
    const type = ["image/jpeg", "image/png", "image/jpg"];
    if (avatar.length > 0) {
      if (avatar.length > 1 || !type.includes(avatar[0].type)) {
        toast.error("Upload A Profile img with type .jpg .png .jpeg");
        err.push("Upload A Profile img with type .jpg .png .jpeg");
      }
    }
    if (formdata.username.length < 3) {
      toast.error("Please Provide Your Name");
      err.push("Please Provide Your Name");
    }
    if (err.length === 0) {
      try {
        if (avatar.length > 0) {
          const uploadIMG = await uploadIMGBB(avatar[0]);
          if (uploadIMG.data.data.display_url) {
            const newavatar = uploadIMG.data.data.display_url;
            const res = await UpdateProfile(formdata.username, newavatar);
           
          } else {
            toast.error("A problem occured whene save img");
          }
        } else {
          const res = await UpdateProfile(formdata.username, "");
          if (res) {
            setReadmood(true);
            toast.success("Profile Update Succefully")
          }
        }
      } catch (err) {
        toast.error(err?.message);
      }
    }
  };
  return (
    <>
      <form onSubmit={handelData} className="grid gap-10 lg:grid-cols-12 p-10">
        <div className="col-span-5 flex flex-col ">
          <div className="avatar mt-10">
            <div className=" mx-auto  h-60  rounded-full">
              <img
                className="w-full object-cover rounded-full "
                src={
                  profilepic.trim()
                    ? profilepic
                    : "https://i.ibb.co/9ZV4gBG/user.png"
                }
                alt="img"
              />
            </div>
          </div>
          <div className="flex justify-center">
            {readmood ? (
              <div
                onClick={() => setReadmood(false)}
                className="btn mt-12   bg-sky-500   hover:bg-sky-500     text-white"
              >
                Update Profile
                <Pagetitle> Profile Settings || HouseHunter</Pagetitle>
              </div>
            ) : (
              <div className="btn mt-12 relative   bg-sky-500   hover:bg-sky-500     text-white">
                Choose Profile Picture
                <input
                  type="file"
                  onChange={(e) =>
                    setProfilepic(URL.createObjectURL(e.target.files[0]))
                  }
                  name="avatar"
                  className="opacity-0 h-full w-full absolute"
                />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-7 pt-10 space-y-4">
          <Input
            readOnly={readmood}
            defaultValue={forminfo.username}
            required
            type="text"
            placeholder="Display Name"
            label="Display Name"
            name="username"
          ></Input>
          <Input
            value={forminfo.email}
            readOnly={true}
            type="email"
            placeholder="Email"
            label="Email (Not Editable)"
          ></Input>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black text-lg">
                About Yourself Short
              </span>
            </label>
            <textarea
              name="additionalInfo"
              readOnly={readmood}
              defaultValue={forminfo.additionalInfo}
              className="textarea textarea-bordered bg-transparent text-base border-black placeholder:text-black text-black w-full "
              rows={5}
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        {!readmood && (
          <div className="col-span-12 gap-4 flex justify-end">
            <div
              onClick={() => setReadmood(true)}
              className=" btn btn-error text-white"
              type="submit"
            >
              close
            </div>
            <button
              className="bg-blue-950 hover:bg-blue-950 btn text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </>
  );
}
