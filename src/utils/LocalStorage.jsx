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
      {
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve the login authentication bug.",
        taskDate: "2025-03-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Write detailed documentation for API endpoints.",
        taskDate: "2025-03-28",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Optimize Database",
        taskDescription: "Improve query performance for large datasets.",
        taskDate: "2025-03-23",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Refactor Code",
        taskDescription: "Clean up redundant functions and optimize logic.",
        taskDate: "2025-03-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Social Media Marketing",
        taskDescription: "Plan and execute social media campaigns.",
        taskDate: "2025-03-30",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with the client.",
        taskDate: "2025-03-29",
        category: "Business",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Draft a blog post about new product features.",
        taskDate: "2025-04-01",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Test New Feature",
        taskDescription:
          "Run unit tests and integration tests on the latest update.",
        taskDate: "2025-03-27",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the upcoming stakeholder meeting.",
        taskDate: "2025-04-02",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix Mobile UI Issues",
        taskDescription: "Resolve layout issues on mobile screens.",
        taskDate: "2025-03-31",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Siddharth",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Improve Security",
        taskDescription: "Implement security patches and enhancements.",
        taskDate: "2025-04-05",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Review Code",
        taskDescription: "Conduct a code review for the new module.",
        taskDate: "2025-03-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
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
