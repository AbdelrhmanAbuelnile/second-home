import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function AreaChar({ data, className, stroke, fill }) {
	// console.log(data)
	return (
		<ResponsiveContainer width="100%" height="100%" className={className}>
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<XAxis dataKey="name" />
				<YAxis dataKey='uv'/>
				<Tooltip />
				<Legend />
				<Bar
					dataKey="pv"
          name="2024"
					fill="#8884d8"
					activeBar={<Rectangle fill="pink" stroke="blue" />}
				/>
				<Bar
					dataKey="uv"
          name="2023"
					fill="#82ca9d"
					activeBar={<Rectangle fill="gold" stroke="purple" />}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}

export default AreaChar;
