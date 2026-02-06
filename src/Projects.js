import ShopEase from "./assets/ShopEase.png";
import Todo from "./assets/Todo.png";
import WeatherApp from "./assets/WeatherApp.png";
import ExpenseTracker from "./assets/ExpenseTracker.png";

const Projects = [
  {
    id: 1,
    title: "Gaming Ecommerce",
    description:
      "This is gaming ecommerce website called ShopEase. In this App we can buy any gaming products like gaming laptop, gaming mouse, gaming kayeboard etc",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "FullStack",
    image: ShopEase,
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "This is Todo App. In this app we can Add, Modify, Delete any task.",
    tech: ["React", "Tailwind", "CRUD"],
    category: "React",
    image: Todo,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "This is Weather & Forecast App. In this app we see hourly, weekly forecast and weather of any city.",
    tech: ["React", "Tailwind", "API"],
    category: "UI/UX",
    image: WeatherApp,
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "This is Expense Tracker App where we can add our expenses.",
    tech: ["React", "Tailwind", "CRUD"],
    category: "React",
    image: ExpenseTracker,
  },
];

export default Projects;
