import React ,{useState}from 'react';
import avatar from "../images/avatar.jpg"

function DashHead() {
    const [userName, setuserName] = useState("Johm Boyer");
    const [search, setsearch] = useState("");
    const [userimg, setuserimg] = useState(avatar);
    const d = new Date();
    const day = d.getDay();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','Decmeber'];
    const handleInput = (e) => {
        e.preventDefault();
        setsearch(e.target.value);
    }
    return (
        <div className="dash-head">
            <div className="head-left">
                <h2>DASHBOARD</h2>
                <p>{days[day-1]} <span> {date} {months[month - 1]} {year}</span></p>
            </div>
            <div className="head-right">
                <div className="right-top">
                    <i className="fa fa-bell" aria-hidden="true"></i> {userName} <img src={userimg} alt=""/>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="right-bottom">
                    <button className="addbtn">+ ADD</button>
                    <button className="searchbtn" onClick={(e) =>{
                        e.preventDefault();
                        setsearch("")
                    }}><i className="fa fa-fw fa-search"></i></button>
                    <input type="text" placeholder="search for application here" name="search" value={search} onChange={handleInput}/>
                </div>
            </div>
        </div>
    )
}

export default DashHead
