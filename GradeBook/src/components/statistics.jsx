import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import students from '../studentgrade';

const PieChartComponent = () => {
  const passCount = students.filter((s) => s.overallGrade >= 4).length;
  const failCount = students.filter((s) => s.overallGrade < 4).length;

  const data = [
    { name: 'Pass', value: passCount, color: '#4CAF50' },
    { name: 'Fail', value: failCount, color: '#F44336' },
  ];

  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#000" textAnchor="middle" dominantBaseline="central">
        {data[index].name}
      </text>
    );
  };

  const renderTooltipContent = ({ payload }) => {
    if (payload && payload.length > 0) {
      const dataEntry = payload[0].payload;
      return <p>{dataEntry.name}:{dataEntry.value}</p>;
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={renderTooltipContent} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;

