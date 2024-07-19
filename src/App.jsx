import "./App.css";
import BgLayout from "./Layout/BgLayout";
import GridHadleing from "./Layout/GridHadleing";
import Navbar from "./components/Navbar/Navbar";
import Calender from "./pages/Calender";
import DateAndWeather from "./pages/DateAndWeather";
import Search from "./pages/Search";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <BgLayout>
        <Navbar />
        <GridHadleing>
          <DateAndWeather />
          <Search />
          <TodoList />
          <Calender />
        </GridHadleing>
      </BgLayout>
    </>
  );
}

export default App;
