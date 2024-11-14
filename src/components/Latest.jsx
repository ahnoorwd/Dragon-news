import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="flex justify-center items-center gap-4">
           <h1 className="bg-[#D72050] font-bold text-white p-2">Latest</h1>
           <Marquee pauseOnHover={true} className="bg-gray-400 p-2 hover:cursor-pointer">
           <Link to='/news'> <p className="font-bold text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nostrum delectus dolores quidem possimus amet!</p></Link>
           </Marquee>
        </div>
    );
};

export default Latest;