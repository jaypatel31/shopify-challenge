import './App.css';
import {useState} from "react"
import AllCards from './components/AllCards/AllCards';
import Navbar from './components/Navbar/Navbar';

function App() {

  let x = new Date();
  let y = new Date(new Date().getTime()-604800000);
  const [endDate, setEndDate] = useState(x.getFullYear()+"-"+x.getMonth()+1+"-"+x.getDate())
  const [startDate, setStartDate] = useState(y.getFullYear()+"-"+y.getMonth()+1+"-"+y.getDate())
  
  return (
    <div className="App">
      <Navbar endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>
      <AllCards endDate={endDate} setEndDate={setEndDate} startDate={startDate} setStartDate={setStartDate}/>
    </div>
  );
}

export default App;
