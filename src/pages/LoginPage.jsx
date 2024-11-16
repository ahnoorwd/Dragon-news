import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/Authprovider";

const LoginPage = () => {
    const {userlogin,setUser} = useContext(AuthContex);

    const Handlesubmitlogin =(e) =>{
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email,password)
     userlogin(email,password)
     .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setUser(user)
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode,errorMessage)
      });
    

     
    }

  return (
    <div className=" min-h-screen items-center flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="font-bold text-2xl text-center">Login Now !!!</h2>
        <form onSubmit={Handlesubmitlogin}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
        <p className="font-semibold text-center">If have no account ? <Link to='/auth/register' className="text-red-500 underline">Register</Link>  </p>
      </div>
    </div>
  );
};

export default LoginPage;
