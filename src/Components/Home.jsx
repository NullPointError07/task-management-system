import Login from "./Login";

const Home = () => {
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
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default Home;
