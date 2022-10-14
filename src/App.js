import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import gdata from './gdata.js'
import Treemap from './Treemap';
import * as d3 from 'd3'
import Treechart from './Treechart';

function App() {

  const gdata = {
    "children": [
        {
            "name": "Rent Payment £9,500.00",
            "label": "Expense Categories",
            "value": 9500,
            "priority": 0
        },
        {
            "name": "Salary £8,379.21",
            "label": "Expense Categories",
            "value": 8379.21,
            "priority": -1
        },
        {
            "name": "Contractor £5,056.00",
            "label": "Expense Categories",
            "value": 5056,
            "priority": -2
        },
        {
            "name": "Others Expense / Unclassified £2,841.23",
            "label": "Expense Categories",
            "value": 2841.23,
            "priority": -3
        },
        {
            "name": "Other £4,157.89",
            "label": "Expense Categories",
            "value": 4157.889999999999,
            "priority": -4
        }
    ]
}

  return (
    <div style={{maxHeight: 700, maxWidth: 700}}>
      <h1>D3 Testing</h1>
      <Treechart data={gdata} height={400} width={600} />
    </div>
  );
}

export default App;
