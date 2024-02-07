import { Link } from "react-router-dom";
import students from "../data/students.json";
import { useState } from "react";

function Customers() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredStudents = students.filter(
		(student) =>
		student.student_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
		student.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		student.student_number.toString().includes(searchTerm.toLowerCase()) ||
		student.student_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
		student.max_budget.toLowerCase().includes(searchTerm.toLowerCase()) || 
		student.preferred_location.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<div className="">
				<div className="flex flex-col items-start relative">
					<input
						type="text"
						placeholder="Search by ID, Name, Number, Location, Budget, or Preferred Location"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full lg:w-4/12 p-2 mb-4 border border-nav rounded-md focus:outline-none focus:border-primary focus:bg-secondary/50 bg-secondary text-fourth placeholder-gray-950"
					/>
				</div>
				<div className="w-full rounded-md">
					<div className="flex flex-row font-semibold bg-fourth text-secondary rounded-t-md capitalize">
						<div className="w-1/6 p-2 text-center">student ID</div>
						<div className="w-1/6 p-2 text-center">student Name</div>
						<div className="w-1/6 p-2 text-center">student Phone</div>
						<div className="w-1/6 p-2 text-center">student Max Budget</div>
						<div className="w-1/6 p-2 text-center">Rooms needed</div>
						<div className="w-1/6 p-2 text-center">student preferred location</div>
						<div className="w-1/6 p-2 text-center">student Location</div>
					</div>
					{filteredStudents.map((student) => (
						<Link
							to={`/customer/${student.student_id}`}
							key={student.student_id}
							className="flex flex-row border border-fourth items-center text-gray-300 bg-secondary hover:bg-secondary/70 w-full hover:rounded-md duration-300 hover:text-secondaryback"
						>
							<div className="w-1/6 p-2 text-center">{student.student_id}</div>
							<div className="w-1/6 p-2 text-center">{student.student_name}</div>
							<div className="w-1/6 p-2 text-center">
								{student.student_number}
							</div>
							<div className="w-1/6 p-2 text-center">
								{student.max_budget}
							</div>
							<div className="w-1/6 p-2 text-center">{student.num_rooms_needed}</div>
							<div className="w-1/6 p-2 text-center">{student.student_location}</div>
							<div className="w-1/6 p-2 text-center">{student.preferred_location}</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Customers;
