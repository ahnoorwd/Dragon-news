import moment from "moment";
import logoimg from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-2 ">
        <img src={logoimg} alt="" />
        <p>There is a news paper which is cover everthinf in a day</p>
       <p className="font-bold">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
    </div>
  );
};

export default Header;
