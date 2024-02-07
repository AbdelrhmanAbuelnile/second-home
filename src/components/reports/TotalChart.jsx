import AreaChar from "./AreaChar";

function TotalChart({ data, text }) {
  return (
    <div className="w-full bg-nav rounded-[20px] py-3 pl-6 text-center flex flex-col justify-center items-start gap-4 h-[250px] lg:h-[300px]">
				<h2 className="text-xl font-bold text-ChartGray capitalize">{text}</h2>
				<div className="w-full h-full">
					<AreaChar
						data={data}
						className="w-full"
					/>
				</div>
				
			</div>
  )
}

export default TotalChart