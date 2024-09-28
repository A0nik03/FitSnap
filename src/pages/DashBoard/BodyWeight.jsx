import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 1, weight: 69.7, goal: 70 },
  { day: 2, weight: 69.2, goal: 69.4 },
  { day: 3, weight: 69.1, goal: 70.5 },
  { day: 4, weight: 69.8, goal: 69.9 },
  { day: 5, weight: 69.4, goal: 70.2 },
  { day: 6, weight: 69.5, goal: 70.8 },
  { day: 7, weight: 69.3, goal: 70.5 },
  { day: 8, weight: 69.7, goal: 70.2 },
  { day: 9, weight: 69.23, goal: 70.5 },
  { day: 10, weight: 70, goal: 71 },
];

const BodyWeight = () => {
  return (
    <div className="h-[360px] w-[74.5%] bg-green-50">
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-normal mb-4 ml-10">Body Weight</h2>
        <ResponsiveContainer height={276}>
          <BarChart 
            data={data} 
            barGap={20}
            barCategoryGap={50} 
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: '#9B9EAC' }} tickLine = {false} axisLine={false} /> 
            <YAxis orientation="right" domain={[69, 71]} tick={{ fill: '#9B9EAC' }} tickLine = {false} axisLine={false} />
            <Tooltip />
            <Legend 
              layout="horizontal" 
              align="right" 
              verticalAlign="top" 
              iconType="circle" 
              wrapperStyle={{ top: -40 }} 
            />
            <Bar dataKey="weight" fill="#f97316" name="Weight (kg)" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar dataKey="goal" fill="#facc15" name="Goal (kg)" barSize={10} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BodyWeight;
