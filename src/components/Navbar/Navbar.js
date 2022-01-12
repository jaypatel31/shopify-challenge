import React,{useState,useEffect} from 'react'
import "./navbar.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = ({startDate,endDate,setEndDate,setStartDate}) => {
    // {startDate,endDate,setEndDate,setStartDate}
    const [dateRange, setDateRange] = useState([new Date(startDate), new Date(endDate)]);
    let [stDate, edDate] = dateRange;

    useEffect(() => {
       if(stDate != null){
        let x = new Date(stDate);
        setStartDate(x.getFullYear()+"-"+(Number(x.getMonth())+1)+"-"+x.getDate())
       }
    }, [stDate])

    useEffect(() => {
        if(edDate!= null){
         let x = new Date(edDate);
         setEndDate(x.getFullYear()+"-"+(Number(x.getMonth())+1)+"-"+x.getDate())
        }
     }, [edDate])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid justify-content-center">
                    <h1 style={{fontFamily: 'Quando'}}>NASA APOD</h1>
                </div>
                <div style={{marginRight:"10px",textAlign:"center"}} className='date-container'>
                <DatePicker
      selectsRange={true}
      startDate={stDate}
      endDate={edDate}
      maxDate={new Date()}
      onChange={(update) => {
          console.log(update)
        setDateRange(update);
        console.log(stDate,edDate);
      }}
      
    />


                </div>
                </nav>
        </div>
    )
}

export default Navbar
