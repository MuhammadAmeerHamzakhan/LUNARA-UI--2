import React from 'react';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import DataTable from './components/DataTable';
import './App.css'; // Import any global styles if you have

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content"> {/* This div wraps the chart and table */}
        <p>
          Projected runway: <span className="highlighted-number">18</span>
        </p>
        <Chart />
        <DataTable />
      </div>
    </div>
  );
};

export default App;
