import { Link } from "react-router-dom";
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between  items-center">
           <div className="gap"></div>
           <div className="navicon space-x-4 font-bold">
            <Link to='/'>Home</Link>
            <Link to='carrer'>Carrer</Link>
            <Link to='about'>About</Link>
           </div>
           <div className="login flex justify-center items-center gap-4">
            <img src={user} alt="" />
            <button className="btn btn-neutral ">Login</button>
           </div>
        </div>
    );
};

export default Navbar;