import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const tasks = useLoaderData();

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-3/4 mt-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div key={task.id}>
            <div className="card w-96 bg-base-100 shadow-xl gap-4">
              <div className="card-body">
                <h2 className="card-title">{task.task_name}</h2>
                <p className="text-start my-2">Due Date: {task.due_date}</p>
                <p className="text-start">
                  Status: {task.status[0]}
                  <button className="btn btn-xs ml-16" onClick={openModal}>
                    Update Status
                  </button>
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-sm btn-primary bg-base-400">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96">
            <h2 className="text-2xl font-bold mb-4">Update Status</h2>

            <button className="btn btn-primary mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
export const taskLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4044/tasks");
  return res.json();
};
