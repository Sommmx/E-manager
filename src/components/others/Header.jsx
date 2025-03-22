import React from "react";

const Header = (props) => {
  // Display the employee's first name if available; otherwise default to "Admin"
  const username = props.data ? props.data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username}👋🏻</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-400 text-white px-5 py-2 rounded font-medium text-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
