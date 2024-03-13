import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import Header from "./Components/Headers/Header";
import Overview from "./Components/Overview/Overview";
import RecentTasks from "./Components/Recent/RecentTasks";

function App() {
  return <div>
    <Header />
    <Overview />
    <RecentTasks />
    <AddTodo />
  </div>;
}

export default App;
