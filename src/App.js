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

// METHOD 2
//  let canvas = d3.select('#canvas')


// METHOD 1
//  useEffect(() => {
//   draw()
// })



 let draw = () => {

  // METHOD 1
  // let chart = Treemap(gdata, {
  //   // path: d => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
  //   value: d => d.value, // size of each node (file); null for internal nodes (folders)
  //   group: d => d.name, // e.g., "animate" in "flare.animate.Easing"; for color
  //   label: (d) => d.name,
  //   title: (d) => d.name, // text to show on hover
  //   width: 1000,
  //   height: 500
    
  // })
  // const svg = document.querySelector('svg');
  // svg.appendChild(chart);

  // METHOD 2
  // let hierarchy = d3.hierarchy(gdata, (node) => {
  //   return node['children']
  // }).sum((node) => {
  //   return node['value']
  // }).sort((node1,node2) => {
  //   return node2['value'] - node1['value']
  // })

  // let createTreeMap = d3.treemap().size([1000,600])

  // createTreeMap(hierarchy)

  // let tiles = hierarchy.leaves()
  // console.log(tiles)

  // let block = canvas.selectAll('g').data(tiles).enter().append('g')
  //                                  .attr('transform', (category) => {
  //                                   return 'translate(' + category['x0'] + ', ' + category['y0'] + ')'
  //                                  })

  // block.append('rect').attr('class','tile')
  //                     .attr('fill', (category) => {
  //                       let priority = category['data']['priority']
  //                       if(priority === 0){
  //                         return '#0071b2'
  //                       }else if(priority === -1){
  //                         return '#78acc7'
  //                       }else if(priority === -2){
  //                         return '#efe6dc'
  //                       }else if(priority === -3){
  //                         return '#f0e442'
  //                       }else if(priority === -4){
  //                         return '#f0e58f'
  //                       }
  //                     })
  //                     .attr('data-name', (category) => {
  //                       return category['data']['name']
  //                     })
  //                     .attr('data-value', (category) => {
  //                       return category['data']['value']
  //                     })
  //                     .attr('width', (category) => {
  //                       return category['x1'] - category['x0']
  //                      })
  //                     .attr('height', (category) => {
  //                       return category['y1'] - category['y0']
  //                      })
 }
  return (
    <div>
      <h1>D3 Testing</h1>
      <Treechart data={gdata} height={400} width={600} />
    {/* <svg viewBox='0 0 1000 500' id='canvas'></svg> */}
    </div>
  );
}

export default App;
