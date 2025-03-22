import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl">
      <div className="flex justify-between w-full">
        <h3 className="bg-red-500 px-3 py-1 rounded h-8 text-sm font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h1>
      <p className="text-sm mt-1">{data.taskDescription}</p>
      <div className="mt-3">
        <button className="w-full bg-red-500 rounded text-sm">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
