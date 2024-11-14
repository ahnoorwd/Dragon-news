import { FaGithub, FaGoogle } from "react-icons/fa";
const Socialpart = () => {
    return (
        <div className="">
            <h1 className="font-semibold mb-3">Login With</h1>
            <div className="*:w-full space-y-2">
                <button className="btn"> <FaGoogle></FaGoogle>   Login  With Google</button>
                <button className="btn"><FaGithub></FaGithub>     Login With Github</button>
            </div>
        </div>
    );
};

export default Socialpart;