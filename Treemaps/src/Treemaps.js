import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Treemaps({ treeData, width, height }) {
  const svgRef = useRef(null);
  const fontSize = 1;
  function process_data(data) {

    const gdata = {}
    const children = []
  
    for (let i = 0; i < data.labels.length; i++) {
      children[i] = {'name' : data.labels[i],'value' : data.datasets.data[i], 'color': data.datasets.backgroundColors[i], 'label':  data.datasets.label}
    }
  gdata['children'] = children
  
  console.log(gdata)
  return gdata
  }

  let data = process_data(treeData)

  function wrapText(selection) {
    selection.each(function () {
      const node = d3.select(this);
      const rectWidth = +node.attr('data-width');
      let word;
      const words = node.text().split(' ').reverse();
      let line = [];
      const x = node.attr('x');
      const y = node.attr('y');
      let tspan = node.text('').append('tspan').attr('x', x).attr('y', y);
      let lineNumber = 0;
      while (words.length > 1) {
        word = words.pop();
        line.push(word);
        tspan.text(line.join(' '));
        const tspanLength = tspan.node().getComputedTextLength();
        if (tspanLength > rectWidth && line.length !== 1) {
          line.pop();
          tspan.text(line.join(' '));
          line = [word];
          tspan = addTspan(word);
        }
      }
      
      addTspan(words.pop());
  
      function addTspan(text) {
        lineNumber += 1;
        return (
          node
            .append('tspan')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', `${lineNumber * fontSize}em`)
            .text(text)
        );
      }
    });
  }

  function renderTreechart() {
    const svg = d3.select(svgRef.current);

    // svg.attr('width', width).attr('height', height);
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const root = d3
      .hierarchy(data)
      .sum((d) => d.value ? d.value : 0)
      .sort((a, b) => b.value - a.value);

    const treemapRoot = d3.treemap().size([width, height]).padding(1)(root);

    const nodes = svg
      .selectAll('g')
      .data(treemapRoot.leaves())
      .join('g')
      .attr('transform', (d) => `translate(${d.x0},${d.y0})`)
      .on("mouseover", function(){return d3.select(this).style("opacity", 0.7);})
      .on("mouseout", function(){return d3.select(this).style("opacity", 1);});

    // const fader = (color) => d3.interpolateRgb(color, '#fff')(0.3);
    // const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader));

    nodes
      .append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => d.data.color ? d.data.color : "#525252");

      nodes.append("title").text((d) => d.data.name ? d.data.name : "Untitled");
  
      nodes
      .append('text')
      .text((d) => d.value === 0 ? '' : d.data.name ? d.data.name : "Anonymous")
      .attr('data-width', (d) => d.x1 - d.x0)
      .attr("text-anchor", "middle")
      .attr("font-size", `${fontSize}em`)
    //   .attr('font-size', `${fontSize}px`)
      .attr("x", function() {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2
    })
      .attr("y", function() {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.y1 - parentData.y0) / 2
    })
      .call(wrapText);

      console.log("DEBUG TREECHART", treemapRoot.leaves())
  }

  useEffect(() => {
    renderTreechart();
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}