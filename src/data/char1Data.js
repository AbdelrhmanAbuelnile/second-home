const data1 = [
  { name: "Jan", uv: 12, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Feb", uv: 14, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Mar", uv: 25, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Apr", uv: 50, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "May", uv: 300, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "jun", uv: 20, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "jul", uv: 49, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Aug", uv: 60, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Sep", uv: 10, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Oct", uv: 24, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Nov", uv: 11, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Dec", uv: 34, pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
];

const totalUV = data1.reduce((sum, entry) => sum + entry.uv, 0);
const totalPV = data1.reduce((sum, entry) => sum + entry.pv, 0);

const overallDifference = totalUV - totalPV;
const overallResult1 = overallDifference >= 0 ? true : false;
const percentage1 = ((Math.abs(overallDifference) / totalPV) * 100).toFixed(2);


// Export overall profit or loss and percentage
export { data1, overallResult1, percentage1 };