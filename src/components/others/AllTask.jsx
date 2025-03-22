import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="alltask" className="bg-[#1c1c1c] p-5 mt-2 rounded">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {userData &&
          userData.map((e, idx) => (
            <div
              key={idx}
              className="border-emerald-500 py-2 px-4 flex justify-between rounded mb-2 border-2"
            >
              <p className="text-lg font-medium w-1/5">{e.firstName}</p>
              <p className="text-lg font-medium w-1/5">{e.taskCount.newTask}</p>
              <p className="text-lg font-medium w-1/5">{e.taskCount.active}</p>
              <p className="text-lg font-medium w-1/5">
                {e.taskCount.completed}
              </p>
              <p className="text-lg font-medium w-1/5">{e.taskCount.failed}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
