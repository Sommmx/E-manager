# E-Manager

E-Manager is a task management application designed to streamline task assignment and tracking for administrators and employees. This version leverages the browser's local storage for authentication and data persistence, offering a simple setup without the need for a backend server.

## Features

- **Admin Dashboard:** Assign tasks to employees and monitor their progress.
- **Employee Dashboard:** View assigned tasks and update their statuses.
- **Task Status Tracking:** Categorize tasks as Active, New, Completed, or Failed.
- **Local Storage Integration:** Store user data and task information in the browser's local storage.

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **State Management:** Context API
- **Data Persistence:** Browser's Local Storage

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/E-manager.git
   cd E-manager
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The application will be running at `http://localhost:3000`.

## Authentication Details

The application comes pre-configured with user data stored in the browser's local storage. The `localstorage.jsx` utility, located in the `src/utils` directory, manages this data.

### Default Users

- **Admin Account:**
  - **Email:** admin@example.com
  - **Password:** 123

- **Employee Accounts:**
  - **Amit:**
    - **Email:** employee1@example.com
    - **Password:** 123
  - **Rohit:**
    - **Email:** employee2@example.com
    - **Password:** 123
  - **Priya:**
    - **Email:** employee3@example.com
    - **Password:** 123
  - **Neha:**
    - **Email:** employee4@example.com
    - **Password:** 123
  - **Siddharth:**
    - **Email:** employee5@example.com
    - **Password:** 123

### Managing Local Storage

The `localstorage.jsx` file initializes and retrieves user data in local storage:

```javascript
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage for the website.",
        taskDate: "2025-03-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
```

## Project Structure

```
E-manager/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── utils/
│   │   └── localstorage.jsx
│   └── App.jsx
├── package.json
└── README.md
```

## Usage

1. **Logging In:**
   - Navigate to `http://localhost:3000`.
   - Enter the email and password of an existing user.
   - Click "Login" to access the respective dashboard.

2. **Admin Dashboard:**
   - View a list of all employees.
   - Assign new tasks to employees.
   - Monitor the status of tasks assigned to employees.

3. **Employee Dashboard:**
   - View assigned tasks categorized by status.
   - Update the status of tasks as they progress.
   - View task details, including descriptions and deadlines.

## Planned Features

- **Backend Integration:** Implement a backend server using Node.js and Express.js.
- **Database Integration:** Use MongoDB or Firebase for data storage.
- **Enhanced Authentication:** Secure authentication using JWT.
- **User Registration:** Allow new users to register and manage profiles.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

*Note: This application uses local storage for data persistence. It is not recommended for production due to security and scalability considerations.*

