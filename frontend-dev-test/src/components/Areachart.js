
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98,
  },
  {
    name:  "Apr",
    uv: 27,
    pv: 39,
  },
  {
    name: "May",
    uv: 18,
    pv: 48,
  },
  {
    name: "Jun",
    uv: 23,
    pv: 38,
  },
  {
    name: "Jul",
    uv: 34,
    pv: 43,
    amt: 21
  }
];

const Areachart = () => {
  return (
    <div className="Chart AChart">
      Application Recieved <span style={{ float: "right" }}>This year  &nbsp;  &nbsp;This weak  &nbsp;  &nbsp;Today  &nbsp;  &nbsp;<i className="fa fa-fw fa-cloud-download"></i>Download report <i className="fa fa-fw fa-ellipsis-v"></i></span>
      <AreaChart
      width={570}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#fe5261" fill="rgba(254,82,97,0.5)" />
      <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="transparent" />
    </AreaChart>
    </div>
  )
};

export default Areachart
