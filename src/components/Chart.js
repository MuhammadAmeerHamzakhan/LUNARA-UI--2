import React from 'react';
import { Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const data = [
  { month: 'Jan 23', profit: 60000, balance: 50000, cost: 40000, revenue: 60000 },
  { month: 'Feb 23', profit: 70000, balance: 60000, cost: 45000, revenue: 65000 },
  { month: 'Mar 23', profit: 80000, balance: 70000, cost: 50000, revenue: 70000 },
  { month: 'Apr 23', profit: 65000, balance: 55000, cost: 30000, revenue: 55000 },
  { month: 'May 23', profit: 90000, balance: 80000, cost: 35000, revenue: 75000 },
  { month: 'Jun 23', profit: 100000, balance: 85000, cost: 40000, revenue: 80000 },
  { month: 'Jul 23', profit: 85000, balance: 75000, cost: 45000, revenue: 85000 },
  { month: 'Aug 23', profit: 95000, balance: 65000, cost: 50000, revenue: 90000 },
  { month: 'Sep 23', profit: 70000, balance: 90000, cost: 55000, revenue: 95000 },
  { month: 'Oct 23', profit: 110000, balance: 95000, cost: 60000, revenue: 105000 },
  { month: 'Nov 23', profit: 105000, balance: 105000, cost: 65000, revenue: 110000 },
  { month: 'Dec 23', profit: 95000, balance: 110000, cost: 70000, revenue: 115000 },
];

const Chart = () => {
  return (
    <div className="chart-container"> {/* Dark background for the chart area */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis 
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} // Format the Y-axis numbers
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="balance" fill="#f03dff" />
          <Bar dataKey="cost" fill="#9ce8ff" />
          <Bar dataKey="revenue" fill="#0044fd" />
          <Line type="monotone" dataKey="profit" stroke="#ffeb3b" strokeWidth={2} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
