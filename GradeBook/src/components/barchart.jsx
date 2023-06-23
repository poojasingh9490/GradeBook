
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import students from '../studentgrade';

const data = students.reduce((acc, student) => {
  const overallGrade = student.overallGrade.toFixed(1);
  const index = acc.findIndex((item) => item.overallGrade === overallGrade);

  if (index === -1) {
    acc.push({ overallGrade, count: 1 });
  } else {
    acc[index].count++;
  }

  return acc;
}, []);

const OverallGradeBarChart = () => {
  return (
    <BarChart width={650} height={400} data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="overallGrade" stroke="#000000" label={{ value: "Overall Grade", position: "insideBottomRight", dy: 15 }} />
      <YAxis yAxisId="left" orientation="left" stroke="#000000" label={{ value: "No. of Students", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="count" fill="#4CAF50" />
    </BarChart>
  );
};

export default OverallGradeBarChart;




