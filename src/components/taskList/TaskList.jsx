import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data, onEmployeeUpdate }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Guard: Check if data or data.tasks is undefined
  if (!data || !data.tasks) {
    return <div>No tasks available.</div>;
  }

  // Function to update a task's status using the unique task id:
  const updateTaskStatusById = (taskId, statusType) => {
    // Clone the current employee data with a new tasks array
    const updatedEmployee = {
      ...data,
      tasks: data.tasks.map((task) => {
        if (task.id === taskId) {
          if (statusType === "active") {
            return {
              ...task,
              active: true,
              newTask: false,
              completed: false,
              failed: false,
            };
          } else if (statusType === "completed") {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: true,
              failed: false,
            };
          } else if (statusType === "failed") {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: false,
              failed: true,
            };
          }
        }
        return task;
      }),
    };

    // Recalculate task counts:
    const newTaskCount = updatedEmployee.tasks.reduce(
      (counts, task) => {
        if (task.newTask) counts.newTask++;
        if (task.active) counts.active++;
        if (task.completed) counts.completed++;
        if (task.failed) counts.failed++;
        return counts;
      },
      { newTask: 0, active: 0, completed: 0, failed: 0 }
    );
    updatedEmployee.taskCount = newTaskCount;

    // Update the overall userData in context by replacing the employee with the updated one
    const updatedAllUsers = userData.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setUserData(updatedAllUsers);

    // Optionally update parent state if a callback is provided
    if (onEmployeeUpdate) {
      onEmployeeUpdate(updatedEmployee);
    }
  };

  return (
    <div
      id="tasklist"
      className="h-[58%] overflow-x-auto py-5 w-full mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((task) => {
        if (task.newTask && !task.active && !task.completed && !task.failed) {
          return (
            <NewTask
              key={task.id}
              data={task}
              onAccept={() => updateTaskStatusById(task.id, "active")}
            />
          );
        }
        if (task.active) {
          return (
            <AcceptTask
              key={task.id}
              data={task}
              onMarkCompleted={() => updateTaskStatusById(task.id, "completed")}
              onMarkFailed={() => updateTaskStatusById(task.id, "failed")}
            />
          );
        }
        if (task.completed) {
          return <CompleteTask key={task.id} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={task.id} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
