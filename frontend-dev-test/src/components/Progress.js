import React ,{useEffect, useState} from 'react'

function Progress() {
    const [render, setrender] = useState("");
    const [data, setdata] = useState([
        {
            status:"Application",
            count:50,
            color:"rgba(167,205,236,255)"
        },
        {
            status:"Short listed",
            count:80,
            color:"rgba(42,155,251,255)"
        },
        {
            status:"Rejected",
            count:40,
            color:"rgba(255,87,89,255)"
        },
        {
            status:"On hold",
            count:10,
            color:"rgba(207,184,220,255)"
        },
        {
            status:"Accepted",
            count:80,
            color:"rgba(99,73,160,255)"
        },
    ]);
    useEffect(()=>{
        const prog = data.map((val,index) =>{
         
            return(<li style = {{color:val.color}}>
                <div className="app_status" style = {{color:val.color}} >
                    {val.status} </div>
                <div className="prog_bar">
                    <div className="prog_val" style={{ width:`${val.count}%`, backgroundColor:val.color }}></div>
                </div>
            </li>)
        });
        setrender(prog)
    },[])


    return (
        <div className="application">
            <i className="fa fa-ellipsis-h" style={{float: "right"}}></i>
            Total applications
            <ul>
               {render}
            </ul>
        </div>
    )
}

export default Progress
