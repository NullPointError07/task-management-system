import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password, name)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
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
              name="name"
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
