import React from "react";

const AcceptTask = ({ data, onMarkCompleted, onMarkFailed }) => {
  return (
    <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl">
      <div className="flex justify-between w-full">
        <h3 className="bg-red-500 px-3 py-1 rounded h-8 text-sm font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h1>
      <p className="text-sm mt-1">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onMarkCompleted}
          className="bg-green-500 py-1 px-2 text-sm rounded"
        >
          Mark as completed
        </button>

        <button
          onClick={onMarkFailed}
          className="bg-red-500 py-1 px-2 text-sm rounded"
        >
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
