import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // Build the new task object
    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Update the specific employee's tasks and taskCount immutably
    const updatedData = userData.map((emp) => {
      if (assignTo === emp.firstName) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTaskObj],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1,
          },
        };
      }
      return emp;
    });

    setUserData(updatedData);
    console.log(updatedData);

    // Clear form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-4 bg-[#1c1c1c] mt-4 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 border border-grey-400 outline-none bg-transparent mb-4"
              type="text"
              placeholder="Something"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 border border-grey-400 outline-none bg-transparent mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 border border-grey-400 outline-none bg-transparent mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 border border-grey-400 outline-none bg-transparent mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-grey-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-grey-400"
            placeholder="Task description..."
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
