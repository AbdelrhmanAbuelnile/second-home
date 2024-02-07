import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";

function SideNav() {
	return (
		<>
			<div className="w-full max-w-[133px] h-full max-h-[500px] py-10 flex flex-col justify-center items-center gap-32 bg-nav z-20 rounded-[20px] fixed inset-0 top-2/4 left-6 -translate-y-[40%]">
      <NavLink
					to={"/"}
					className="
          rounded-xl p-1.5 md:p-3 text-base md:text-xl active:bg-primary
          font-semibold text-white hover:bg-primary
          hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<MdOutlineInsertChart />
          <span className="text-base font-medium">
            Reports
          </span>
				</NavLink>

				<NavLink
					to={"/students"}
					className="
							rounded-xl p-1.5 md:p-3 text-base md:text-xl
							font-semibold text-white hover:bg-primary
							hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<GiSchoolBag />
					<span className="text-base font-medium">Students</span>
				</NavLink>

				<NavLink
					to={"/owners"}
					className="
          rounded-xl p-1.5 md:p-3 text-base md:text-xl
          font-semibold text-white hover:bg-primary
          hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<FaKey />
          <span className="text-base font-medium">
            Owners
          </span>
				</NavLink>


			</div>
		</>
	);
}

export default SideNav;
