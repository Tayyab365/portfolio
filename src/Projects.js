import ShopEase from "./assets/ShopEase.png";
import Todo from "./assets/Todo.png";
import WeatherApp from "./assets/WeatherApp.png";
import ExpenseTracker from "./assets/ExpenseTracker.png";

const Projects = [
  {
    id: 1,
    title: "E-Commerce Store (FYP)",
    description:
      "Full-stack e-commerce platform with authentication, cart system, and admin dashboard for managing products, users, and orders.",
    tech: ["React", "Node.js", "MongoDB"],
    image: ShopEase,
    live_demo: "https://tayyab-fyp.vercel.app/",
    github: "https://github.com/Tayyab365/fyp",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Task management app that allows users to add, edit, delete, and organize tasks with real-time updates.",
    tech: ["React", "CRUD", "Local Storage"],
    image: Todo,
    live_demo: "https://tayyab-todo-app.vercel.app/",
    github: "https://github.com/Tayyab365/todo-app",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "Weather application showing real-time temperature, hourly forecast, and weekly predictions using live API data.",
    tech: ["JavaScript", "API", "CSS"],
    image: WeatherApp,
    live_demo: "https://tayyab-weather-app.vercel.app/",
    github: "https://github.com/Tayyab365/weather-app",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Expense management tool to track daily spending with add, edit, and delete functionality and balance calculation.",
    tech: ["React", "CRUD", "Local Storage"],
    image: ExpenseTracker,
    live_demo: "https://tayyab-expense-tracker.vercel.app/",
    github: "https://github.com/Tayyab365/expense-tracker-app",
  },
];

export default Projects;
