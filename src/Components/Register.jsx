import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    const form = target.event;
  };

  return (
    <div className="hero mt-12">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="Enter Your Name"
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
              name="email"
              placeholder="Enter Your Email"
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
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-base-500">Sign Up</button>
          </div>
        </form>
        <p>Already Have an Account?</p>
        <Link to="/">
          <button className="btn btn-link text-blue-500">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
