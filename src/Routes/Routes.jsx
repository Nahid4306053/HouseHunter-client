import { createBrowserRouter } from "react-router-dom";
import AuthnicationContext from "../Context/AuthnicationContext";
import TemplateMoodContext from "../Context/TemplateMoodContext";
import RatingForm from "../components/Dashboard/Rating/RatingForm";
import CommunityLayout from "../layouts/CommunityLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MainLayouts from "../layouts/MainLayouts";
import AboutUs from "../pages/AboutUs";
import HouseDetails from "../pages/HouseDetails";
import CommunityHub from "../pages/CommunityHub";
import ContactUs from "../pages/ContactUs";
import AddNewHouse from "../pages/Dashboard/AddNewHouse";
import HandelJourneyPost from "../pages/Dashboard/HandelJourneyPost";
import HandelMyPosts from "../pages/Dashboard/HandelMyPosts";
import HandelUserPost from "../pages/Dashboard/HandelUserPost";
import ManageBookings from "../pages/Dashboard/ManageBooking";
import Managecars from "../pages/Dashboard/ManageHouse";
import MangeUser from "../pages/Dashboard/MangeUser";
import MyBookings from "../pages/Dashboard/MyBookings";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory";
import MyProfile from "../pages/Dashboard/MyProfile";
import Payment from "../pages/Dashboard/Payment";
import ProfileSetting from "../pages/Dashboard/ProfileSetting";
import UpcomingBook from "../pages/Dashboard/UpcomingBookings";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import PostDetails from "../pages/PostDetails";
import Signup from "../pages/Signup";
import Login from "../pages/logIn";
import AuthHandler from "./AuthHandler";
import PrivateRouter from "./PrivateRouter";
import Houses from "../pages/Houses";

const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <MainLayouts />
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: (
      <TemplateMoodContext>
        <Notfound />
      </TemplateMoodContext>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/house",
        element: <Houses />,
      },
      {
        path: "/community",
        element: <CommunityLayout />,
        children: [
          {
            path: "/community/",
            element: <CommunityHub />,
          },
          {
            path: "/community/post-details/:id",
            element: <PostDetails />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      { path: "/house-details/:id", element: <HouseDetails></HouseDetails> },
    ],
  }, 
  {
    path: "/signup",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Signup></Signup>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Login></Login>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <PrivateRouter>
            <DashBoardLayout />
          </PrivateRouter>
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: <Notfound></Notfound>,
    children: [
      { path: "profile", element: <MyProfile></MyProfile> },
      { path: "add-house", element: <AddNewHouse></AddNewHouse> },
      { path: "manage-houses", element: <Managecars></Managecars> },
      { path: "my-bookings", element: <MyBookings></MyBookings> },
      { path: "upcoming-bookings", element: <UpcomingBook></UpcomingBook> },
      { path: "manage-bookings", element: <ManageBookings></ManageBookings> },
      { path: "manage-users", element: <MangeUser></MangeUser> },
      { path: "profile-settings", element: <ProfileSetting></ProfileSetting> },
      {
        path: "payment-history",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      { path: "/dashboard/payment/:id", element: <Payment></Payment> },
      { path: "/dashboard/review/:id", element: <RatingForm></RatingForm> },
      { path: "my-posts", element: <HandelMyPosts></HandelMyPosts> },
      {
        path: "/dashboard/add-post/",
        element: <HandelJourneyPost></HandelJourneyPost>,
      },
      { path: "handel-post", element: <HandelUserPost></HandelUserPost> },
      {
        path: "/dashboard/add-post/",
        element: <HandelJourneyPost></HandelJourneyPost>,
      },
    ],
  },
]);

export default CreateDRouter;
