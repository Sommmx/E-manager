import React from "react";

const TaskListNumbers = ({ data }) => {
  // For an employee, data.taskCount exists.
  // (For admin, this component might not be used.)
  return (
    <div className="flex justify-between gap-5 mt-10">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
