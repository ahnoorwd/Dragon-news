import { Link } from "react-router-dom";
import userr from '../assets/user.png';
import { useContext } from "react";
import { AuthContex } from "../provider/Authprovider";

const Navbar = () => {
    const {user} = useContext(AuthContex);
    return (
        <div className="flex justify-between  items-center">
           <div className="gap">
            {
                user&&user.email
            }
           </div>
           <div className="navicon space-x-4 font-bold">
            <Link to='/'>Home</Link>
            <Link to='carrer'>Carrer</Link>
            <Link to='about'>About</Link>
           </div>
           <div className="login flex justify-center items-center gap-4">
            <img src={userr} alt="" />
            <Link to ='/auth/login' className="btn btn-neutral ">Login</Link>
            
           </div>
        </div>
    );
};

export default Navbar;