import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const TaskDetails = () => {
  const [comment, setComment] = useState("");
  const { id } = useParams();

  // Get the data using useLoaderData
  const details = useLoaderData();
  console.log(details);

  if (!details) {
    return <div>Loading...</div>;
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    // You can implement the logic to handle the comment submission here
    console.log("Submitted Comment:", comment);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-5xl font-bold mb-4">{details.task_name}</div>
        <div className="mb-4 font-semibold text-lg">
          Description: {details.task_description}
        </div>
        <div className="mb-4 font-semibold text-lg">
          Status: {details.status[2]}
        </div>
        <div className="mb-4 font-semibold text-lg">
          Due Date: {details.due_date}
        </div>
        <div className="mb-4 font-semibold text-lg">
          Assigned By: {details.assignee}
        </div>

        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded resize-none"
            rows="4"
            placeholder="Enter your comment here..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmitComment}
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

export const taskDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4044/tasks/${id}`);
  return res.json();
};
