import { useState } from "react";
import { useUnsavedChangeWarning } from "../hooks/useUnsavedChangeWarning";

const CommentForm = () => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  useUnsavedChangeWarning(!name || !comment);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="md:w-[600px] max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
          Comment Now
        </h5>
        <div className="flex flex-col">
          <label htmlFor="name" className="my-2">
            Your name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            className="shadow-sm bg-gray-50 border border-gray-30 p-2.5"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment" className="my-2">
            Your Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Comment"
            className="shadow-sm bg-gray-50 border border-gray-30 p-2.5 w-full"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 px-2 py-3 mt-4 shadow rounded-lg text-white"
          onClick={() => {
            if (name && comment) alert("Successful!");
            else alert("Failed!");
          }}
        >
          Comment Now
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
