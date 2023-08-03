import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const tasks = useLoaderData();

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to select which task was clicked by the user
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  // State to store the selected status for the task
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Function to handle the status
  const handleStatus = (taskId) => {
    setSelectedTaskId(taskId);
    // Set the selectedStatus to the first status of the clicked task
    const selectedTask = tasks.find((task) => task.id === taskId);
    setSelectedStatus(selectedTask.status[0]);
    setModalOpen(true); // Open the modal when a task is clicked
  };

  // Function to update the task status based on the radio button selection
  const updateTaskStatus = (status) => {
    setSelectedStatus(status);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    // Update the task status with the selected status
    if (selectedTaskId !== null && selectedStatus !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTaskId
          ? { ...task, status: [selectedStatus] }
          : task
      );
      // Here you should update your tasks data, for now, we will log the updatedTasks
      console.log(updatedTasks);
    }
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
                  Status:{" "}
                  {selectedStatus !== null ? selectedStatus : task.status[0]}
                  <button
                    onClick={() => handleStatus(task.id)}
                    className="btn btn-xs ml-16"
                  >
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
            {tasks.map((task) => {
              if (task.id === selectedTaskId) {
                return (
                  <div key={task.id}>
                    {
                      <div className="form-control">
                        {task.status.map((value) => (
                          <div key={value}>
                            <label className="label cursor-pointer">
                              <span className="label-text">{value}</span>
                              <input
                                type="radio"
                                name="radio-10"
                                className="radio checked:bg-red-500"
                                checked={selectedStatus === value}
                                onChange={() => updateTaskStatus(value)}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                );
              }
              return null; // Don't render other tasks' statuses
            })}
            <button className="btn btn-primary mt-4" onClick={closeModal}>
              Save
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
