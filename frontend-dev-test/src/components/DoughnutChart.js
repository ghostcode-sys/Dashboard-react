import React, { PureComponent } from 'react';
import { PieChart, Pie, Label, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 45 },
  { name: 'Group B', value: 30 },
  { name: 'Group C', value: 25 },
];
const COLORS = ['#6443b4', '#2e9cfd', '#fe5260'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class DoughnutChart extends PureComponent {
  render() {
    return (
      <div className="Dchart">
        Open Positons By Department
        <i className="fa fa-fw fa-ellipsis-h" style={{float:"right"}}></i> 
      <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={100}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          text = "hdfvj"
        >
       <Label 
       value="Open Postions" position="centerTop" className='label' fill="white"
       />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }
}



