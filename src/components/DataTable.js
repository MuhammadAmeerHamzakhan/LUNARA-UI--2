import React from 'react';

const DataTable = () => {
  const data = [
    { description: 'Starting Cash Balance', date: '05/06/24', type: 'Expense', recurrence: 'Monthly' },
    { description: 'Cloud Infrastructure', date: '06/15/24', type: 'Revenue', recurrence: 'Monthly' },
    { description: 'Engineering Salary', date: '07/12/24', type: 'Expense', recurrence: 'Monthly' },
  ];

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>Date</th>
          <th style={styles.th}>Type</th>
          <th style={styles.th}>Recurrence</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={styles.descriptionTd}>{row.description}</td> {/* Apply white text to description */}
            <td style={styles.whiteTd}>{row.date}</td> {/* Apply white text to date */}
            <td style={styles.whiteTd}>{row.type}</td> {/* Apply white text to type */}
            <td style={styles.whiteTd}>{row.recurrence}</td> {/* Apply white text to recurrence */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    color: 'white', // Change the text color of the header to white
    backgroundColor: '#333', // Optional: Add a background color for contrast
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
  },
  descriptionTd: {
    color: 'white', // Change the text color of the description to white
    backgroundColor: '#555', // Optional: Add a background color for contrast
    borderBottom: '1px solid #ddd',
    padding: '8px',
  },
  whiteTd: {
    color: 'white', // Change the text color of the date, type, and recurrence to white
    backgroundColor: '#666', // Optional: Add a background color for contrast
    borderBottom: '1px solid #ddd',
    padding: '8px',
  },
};

export default DataTable;
