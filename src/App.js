import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import { UserData } from "./utils/Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((oneData) => oneData.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((oneData) => oneData.userGain),
        backgroundColor: ["red"],
      },
      {
        label: "Users Lost",
        data: UserData.map((oneData) => oneData.userLost),
        backgroundColor: ["blue"],
      },
    ],
  });
  return (
    <div className="App">
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} />
    </div>
  );
}

export default App;
