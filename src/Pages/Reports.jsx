import { data2, overallResult2, percentage2 } from "../data/char2Data";
import { data3, overallResult3, percentage3 } from "../data/char3Data";
import statics from "../data/statics";
import SalesChartComp from "../components/reports/SalesChartComp";
import TotalChart from "../components/reports/TotalChart";
import StaticChart from "../components/reports/StaticChart";
import ProfitChart from "../components/reports/ProfitChart";

function Reports() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
			<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
				<TotalChart data={data2} overallResult={overallResult2} percentage={percentage2} text={"new owners"} />

				<TotalChart data={data3} overallResult={overallResult3} percentage={percentage3} text={"new students"} />
			</div>

			<div className="w-full flex flex-col  justify-center items-start gap-4">
				<div className="w-full flex flex-col justify-center items-start gap-4">
					<SalesChartComp />
					
				</div>
				
				<div className="w-full flex flex-col lg:flex-row justify-center items-start gap-4">
					<StaticChart data={statics}/>
					<ProfitChart />
				</div>
			</div>

		</div>
  )
}

export default Reports