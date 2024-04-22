import "./App.css";
import BgLayout from "./Layout/BgLayout";
import Calender from "./pages/Calender";
import DateAndWeather from "./pages/DateAndWeather";
import Search from "./pages/Search";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <BgLayout>
        <DateAndWeather />
        <Search />
        <Todo />
        <Calender />
      </BgLayout>
    </>
  );
}

export default App;
