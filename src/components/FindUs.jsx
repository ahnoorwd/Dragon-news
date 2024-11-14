import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3 mt-3">Find_US_ON</h1>
      <div className="join  flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"> <FaFacebook></FaFacebook>   Facebook</button>
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instragram</button>
        <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twiter</button>
      </div>
    </div>
  );
};

export default FindUs;
