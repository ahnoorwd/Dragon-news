import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/Authprovider";

const RegisterPage = () => {
    const {createNewuser,setUser} = useContext(AuthContex);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const Photourl = e.target.photourl.value;
        console.log(name,password,email,Photourl);
        
        createNewuser(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
          });
        
    }
  return (
    <div>
      <div className="  items-center flex justify-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h2 className="font-bold text-2xl text-center">Register Now !!!</h2>
          <form onSubmit={handleSubmit} className="card-body">


          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-url</span>
              </label>
              <input
                type="text"
                name='photourl'
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="font-semibold text-center">
            Already have an account ?{" "}
            <Link to="/auth/login" className="text-red-500 underline">
              Login Fast
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

