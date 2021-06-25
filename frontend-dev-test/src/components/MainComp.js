import React from 'react'
import DashHead from './DashHead'
import Card from './Card'
import UserDetail from './UserDetail';
import Progress from './Progress';
import Campaign from './Campaign';
import Areachart from './Areachart';
import DoughnutChart from './DoughnutChart'

function MainComp() {
    const data = {
        name:"Total applications",
        count:7956,
        perchange:"+3.59%",
        percentage:70,
        color:"rgba(151,122,230,255)",
        column:1
    };
    const data1= {
        name:"Shortlisted Candidates",
        count:4658,
        perchange:"+0.6%",
        percentage:60,
        color:"rgba(151,122,230,255)",
        column:2
    };
    const data2= {
        name:"Total applications",
        count:1501,
        perchange:"-0.41%",
        percentage:-40,
        color:"rgba(223,89,99,255)",
        column:3
    };
    return (
        <div className = "main">
            <DashHead />
            <Card  send = {data} />
            <Card  send = {data1} />
            <Card  send = {data2} />
            <UserDetail  />
            <Areachart   />
            < Progress />
            < Campaign />
            <DoughnutChart  />
        </div>
    )
}

export default MainComp
