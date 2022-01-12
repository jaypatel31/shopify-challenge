import React from 'react'
import "./cards.css"

const Cards = ({apod,id,st,setListNo,listNo,likes,setLikes}) => {
    let {date,explanation,hdurl,title,url,thumbnail_url} = apod;

    const viewMore = () =>{
        let nw = listNo.map((item,index)=>{
            return index==id ? 1 : item
        })
        setListNo(nw)
    }

    const viewLess = () =>{
        let nw = listNo.map((item,index)=>{
            return index==id ? 0 : item
        })
        setListNo(nw)
    }

    const likeTrigger = () =>{
        console.log("hello")
        if(likes[date]){
           let tmp = JSON.parse(JSON.stringify(likes));
           delete tmp[date]
           setLikes(tmp)
        }else{
            let tmp = JSON.parse(JSON.stringify(likes));
            tmp[date] = 1;
            
            setLikes(tmp)
        }
        console.log(likes)
    }

    return (
        <div className="mt-5">
            <div className="card mb-3 card-container">
            <h3 className="card-header">{title}</h3>
            
            <div className="card-body card-content mt-3">
                <img className='card-img' src={hdurl||thumbnail_url} alt="img"/>
                <p className="card-text explaination">{st ==0 ? explanation.substr(0,500) :explanation} {st === 0 ?(<a href="javascript:void(0)" onClick={viewMore}>Read More...</a>):(<a href="javascript:void(0)" onClick={viewLess}>Read Less</a>)}</p>
            </div>
            <hr style={{margin:"0px"}}/>
            <div className="card-body">
                <i className={`fas fa-heart ${likes[date]?"red-color":""}`} onClick={likeTrigger} style={{fontSize:"20px",cursor:"pointer"}}></i>
                <a href={url} rel="noreferrer" target="_blank" className="card-link inline-block pl-5" style={{verticalAlign: "text-bottom",display:"inline-block",paddingLeft:"1rem"}}>View More</a>
            </div>
            <div className="card-footer text-muted">
                 Date: {date}
            </div>
            </div>
        </div>
    )
}

export default Cards
