import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import gdata from './gdata.js'
import Treemaps from './Treemaps';
import * as d3 from 'd3'

function App() {

  useEffect(() => {
    // process_data(chart_tree)
    console.log("old data",gdata)
  });


  let chart_tree = {
    "labels": [
        "Jan (5%)",
        "Feb (12%)",
        "Mar (3%)",
        "Apr (5%)",
        "May (5%)",
        "Jun (2%)",
        "Jul (32%)",
        "Aug (5%)",
        "Sept (3%)",
        "Oct (6%)",
        "Nov (14%)",
        "Dec (8%)"
    ],
    "datasets": {
        "label": "Per Year Expenses 2020",
        "data": [
            1309,
            3132,
            769,
            1292,
            1384,
            653,
            8462,
            1179,
            742,
            1475,
            3790,
            1976
        ],
        "backgroundColors": [
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB",
            "#CBCBCB"
        ]
    }
} 

  const gdata = {
    "children": [
        {
            "name": "Rent Payment £9,500.00",
            "label": "Expense Categories",
            "value": 9500,
            "priority": 0,
            "color": "#0071b2"
        },
        {
            "name": "Salary £8,379.21",
            "label": "Expense Categories",
            "value": 8379.21,
            "priority": -1,
            "color": "#78acc7"
        },
        {
            "name": "Contractor £5,056.00",
            "label": "Expense Categories",
            "value": 5056,
            "priority": -2,
            "color": "#efe6dc"
        },
        {
            "name": "Others Expense / Unclassified £2,841.23",
            "label": "Expense Categories",
            "value": 2841.23,
            "priority": -3,
            "color": "#f0e442"
        },
        {
            "name": "Other £4,157.89",
            "label": "Expense Categories",
            "value": 4157.889999999999,
            "priority": -4,
            "color": "#f0e58f"
        }
    ]
}

  return (
    <div style={{maxHeight: 700, maxWidth: 700}}>
      <Treemaps treeData={chart_tree} height={400} width={600} />
    </div>
  );
}

export default App;
