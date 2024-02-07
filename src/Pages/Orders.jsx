import { Link } from "react-router-dom";
import owners from "../data/owners.json";
import { useState } from "react";

function Orders() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredOwners = owners
		.filter(
			(owner) =>
			owner.owner_name
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
					owner.owner_id
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
					owner.id.toString().includes(searchTerm.toLowerCase()) ||
					owner.owner_location.toLowerCase().includes(searchTerm.toLowerCase())
		)
		;
	return (
		<div className="">
			<div className="flex flex-col items-start relative">
				<input
					type="text"
					placeholder="Search by owner name, owner id, or owner location"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full lg:w-4/12 p-2 mb-4 border border-nav rounded-md focus:outline-none focus:border-primary focus:bg-secondary/50 bg-secondary text-fourth placeholder-gray-950"
				/>
			</div>
			<div className="w-full rounded-md">
				<div className="flex flex-row font-semibold bg-fourth text-secondary rounded-t-md">
					<div className="w-1/6 p-2 text-center">Owner ID</div>
					<div className="w-1/6 p-2 text-center">Owner Name</div>
					<div className="w-1/6 p-2 text-center">No. properties</div>
					<div className="w-1/6 p-2 text-center">no. beds</div>
					<div className="w-1/6 p-2 text-center">Owner Location</div>
					<div className="w-1/6 p-2 text-center">Students Interested</div>
				</div>
				{filteredOwners.map((owner) => (
					<Link
						to={`/order/${owner.owner_id}`}
						key={owner.owner_id}
						className="flex flex-row border border-fourth items-center text-gray-300 bg-secondary hover:bg-secondary/70 w-full hover:rounded-md duration-300 hover:text-secondaryback"
					>
						<div className="w-1/6 p-2 text-center">{owner.owner_id}</div>
						<div className="w-1/6 p-2 text-center">{owner.owner_name}</div>
						<div className="w-1/6 p-2 text-center">
							{owner.num_properties}
						</div>
						<div className="w-1/6 p-2 text-center">{owner.num_rooms}</div>
						<div className="w-1/6 p-2 text-center">{owner.owner_location}</div>
						<div className="w-1/6 p-2 text-center">{owner.num_students_interested}</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Orders;
