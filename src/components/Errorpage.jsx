import { Link } from "react-router-dom";
import ErrorPic from "../assets/Scarecrow.png";
import Navbar from "./Navbar";

const Errorpage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="container text-center my-10">
        <div className="flex justify-center items-center">
          <img src={ErrorPic} alt="" />
        </div>
        <div className="space-y-5">
          <h3 className="font-bold text-3xl my-5">I have bad news for you </h3>
          <p className="font-medium text-xl mb-5">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to="/">
            <button className="btn-primary btn mt-5">Back to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
