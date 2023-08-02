import { Link } from "react-router-dom";

const Home = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="lg:w-3/4 lg:flex items-center lg:space-x-20 flex-col lg:flex-row">
          <div className=" text-center lg:text-left ">
            <h1 className="text-5xl font-bold">
              MANAGE YOUR <br />
              TASKS
              <span> SIMPLY</span>
            </h1>
            <p className="py-6 lg:ml-0 md:ml-0 ml-8 lg:w-3/4 ">
              Are you tired of feeling overwhelmed by endless tasks and
              projects? Struggling to keep track of deadlines and assignments?
              Look no further! Our Task Manager Website is the ultimate solution
              to streamline your workflow, boost productivity, and ensure
              nothing falls through the cracks.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-base-500">Login</button>
              </div>
            </form>
            <p>Dont Have an Account?</p>
            <Link to="/register">
              <button className="btn btn-link text-blue-500">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
