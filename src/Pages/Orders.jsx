import { Link } from "react-router-dom";
import orders from "../data/orders.json";
import { useState } from "react";
import OrderState from "../components/OrderState";

function Orders() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredOrders = orders
		.filter(
			(order) =>
				order.fridge_model
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				order.customerName
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				order.id.toString().includes(searchTerm.toLowerCase()) ||
				order.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.order_state.toLowerCase().includes(searchTerm.toLowerCase())
		)
		;
	return (
		<div className="">
			<div className="flex flex-col items-start relative">
				<input
					type="text"
					placeholder="Search by fridge model, customer name, customer id, or location"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full lg:w-4/12 p-2 mb-4 border border-nav rounded-md focus:outline-none focus:border-primary focus:bg-secondary/50 bg-secondary text-fourth placeholder-gray-950"
				/>
			</div>
			<div className="w-full rounded-md">
				<div className="flex flex-row font-semibold bg-fourth text-secondary rounded-t-md">
					<div className="w-1/6 p-2 text-center">Order ID</div>
					<div className="w-1/6 p-2 text-center">Customer Name</div>
					<div className="w-1/6 p-2 text-center">Product</div>
					<div className="w-1/6 p-2 text-center">Quantity</div>
					<div className="w-1/6 p-2 text-center">Order State</div>
					<div className="w-1/6 p-2 text-center">Total Price</div>
					<div className="w-1/6 p-2 text-center">Purchase Date</div>
					<div className="w-1/6 p-2 text-center">Purchase Location</div>
				</div>
				{filteredOrders.map((order) => (
					<Link
						to={`/order/${order.id}`}
						key={order.id}
						className="flex flex-row border border-fourth items-center text-gray-300 bg-secondary hover:bg-secondary/70 w-full hover:rounded-md duration-300 hover:text-secondaryback"
					>
						<div className="w-1/6 p-2 text-center">{order.id}</div>
						<div className="w-1/6 p-2 text-center">{order.customerName}</div>
						<div className="w-1/6 p-2 text-center">{order.fridge_model}</div>
						<div className="w-1/6 p-2 text-center">
							{order.number_of_items}
						</div>
            <OrderState state={order.order_state} />
						<div className="w-1/6 p-2 text-center">{order.total}</div>
						<div className="w-1/6 p-2 text-center">{order.date}</div>
						<div className="w-1/6 p-2 text-center">{order.location}</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Orders;
