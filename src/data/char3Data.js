const data3 = [
  { name: "Jan", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Feb", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Mar", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Apr", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "May", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "jun", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "jul", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Aug", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Sep", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Oct", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Nov", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
  { name: "Dec", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: Math.floor(Math.random() * 200) },
];

const totalUV = data3.reduce((sum, entry) => sum + entry.uv, 0);
const totalPV = data3.reduce((sum, entry) => sum + entry.pv, 0);

// Calculate overall profit or loss
const overallDifference = totalUV - totalPV;
const overallResult3 = overallDifference >= 0 ? true: false;

// Calculate profit or loss percentage3
const percentage3 = ((Math.abs(overallDifference) / totalPV) * 100).toFixed(2);

// Export overall profit or loss and percentage3
export { data3, overallResult3, percentage3 };