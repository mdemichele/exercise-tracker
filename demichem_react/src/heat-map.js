import * as d3 from 'd3';

function heatmap(data, {
  x = ([x]) => x, // Function that returns the temporal, (date in my case ) x-value 
  y = ([y]) => y, // Function that returns the quantitative, (distance in my case) y-value
  title,          // given d in data, returns the title text 
  width = 928,    // width of the chart, in pixels 
  cellSize = 17,  // width and height of an individual day, in pixels 
  weekday = "monday", // either: weekday, sunday, or monday 
  formatDay = i => "SMTWTFS"[i], // given a day number in [0, 6], the day-of-week label 
  formatMonth = "%b", // format specifier string for months (above the chart)
  yFormat,  // format specifier string for values (in the title)
  colors = d3.interpolatePiYG
} = {}) {
  console.log(data);
  
  // Compute Values 
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const I = d3.range(X.length);
  
  // Not sure what these are used for??
  const weekDays = weekday === "weekday" ? 5 : 7;
  const height = cellSize * (weekDays + 2);
  
  // Compute a color scale. This assumes a diverging color scheme where the pivot is zero, and we want symmetric difference around zero.
  const max = d3.quantile(Y, 0.9975, Math.abs);
  const color = d3.scaleSequential([-max, +max], colors).unknown("none");
  
  // Construct our base svg 
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10);
  
  console.log(svg);
  
  
};

export default heatmap;