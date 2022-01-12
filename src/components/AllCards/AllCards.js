import React, {useEffect,useState,useRef} from 'react'
import "./allcards.css"
import Cards from "../Cards/Cards"
import axios from "axios"
import Spinner from '../Spinner';

let api = "https://api.nasa.gov/planetary/apod?api_key=rYTafaDOIYBCuNLtymLdbNzD6DzGtts5eeJFLvAE&thumbs=true";

const AllCards = ({startDate,endDate}) => {

    const [list, setList] = useState([])
    const [listNo, setListNo] = useState([])
    const [likes,setLikes] = useState({})


    var stDate = useRef(startDate);
    var edDate= useRef(endDate);

    useEffect(() => {
        if(localStorage.getItem("nasa-likes")){
            setLikes(JSON.parse(localStorage.getItem("nasa-likes")));
        }
        axios.get(`${api}&start_date=${startDate}&end_date=${endDate}`).then((res)=>{
            console.log(res)
            res.data.sort((a, b) => {
                return new Date(b.date).getTime() -new Date(a.date).getTime() ;
            });
            setList(res.data);
            setListNo(new Array(res.data.length).fill(0))
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("nasa-likes",JSON.stringify(likes))
    }, [likes])

    useEffect(() => {

        if(new Date(stDate.current+" 00:00:00").getTime() != new Date(startDate+" 00:00:00").getTime() && new Date(edDate.current+" 00:00:00").getTime() != new Date(endDate+" 00:00:00").getTime()){
            setList([]);
            stDate.current = startDate;
            edDate.current = endDate;
            axios.get(`${api}&start_date=${startDate}&end_date=${endDate}`).then((res)=>{
                console.log(res)
                res.data.sort((a, b) => {
                    return new Date(b.date).getTime() -new Date(a.date).getTime() ;
                });
                setList(res.data);
                setListNo(new Array(res.data.length).fill(0))
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }, [startDate,endDate])


    return (
        <div>
            {
                list.length>0 ?(
                    <>
                    {
                        list.map((apod,index)=>{
                            return(
                                <Cards apod={apod} key={index} id={index} st={listNo[index]} setListNo={setListNo} listNo={listNo} likes={likes} setLikes={setLikes}/>
                            )
                        })
                    }
                    </>
                ):<Spinner/>
            }
        </div>
    )
}

export default AllCards
