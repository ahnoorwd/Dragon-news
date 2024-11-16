import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="  items-center flex justify-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h2 className="font-bold text-2xl text-center">Register Now !!!</h2>
          <form className="card-body">


          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
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
