'use client'
import { useState } from "react";
export default function Home() {
	const [search, setSearch] = useState("Example Search");
	return (
		<div className="grid grid-rows-8 grid-cols-8 bg-[#ededed] shadow-xl rounded-2xl border border-gray-300 p-4">
			{/* Header */}
			<header className="w-full grid col-start-2 col-span-6 shadow-md mt-2 p-10 rounded-lg bg-white">
				<h1 className="text-5xl text-green-400">Choose Green</h1>
			</header>

			{/* Search */}
			<div className="text-black grid row-start-2 col-start-2 col-span-6 text-right text-xl">
				<div className="flex w-full items-center ">
					<h1 className="text-black mr-4 mt-2">Search:</h1>
					<div className="bg-gray-400 flex w-full shadow-md mt-2 h-12 rounded-full">
						<div className="flex ml-4 mr-2 ">
							<select className="rounded-full bg-slate-400 text-center">
								<option value="all">All</option>
								<option value="auto">Car</option>
								<option value="home-good">Home Goods</option>
								<option value="food">Food</option>
								<option value="appliances">Appliances</option>
							</select>
						</div>
						<input className="w-full z-20 pl-4 shadow-md h-12 rounded-full border border-gray-300 focus:outline-none focus:border-[#7de49f] focus:ring-2 focus:ring-[#7de49f]"/>
						<button className="mx-10 hover:bg-slate-500 ">
							<img src="/search.png" alt="" className="size w-[40px] h-[35px]" />
						</button>
					</div>
				</div>
			</div>

			{/* Left Div */}
			<div className="w-full grid col-start-2 col-span-2 row-span-5 rounded-xl shadow-inner bg-white p-4 text-black">
				<p>Label Filters</p>
			</div>

			{/* Main Content */}
			<main className="col-start-4 col-span-4 row-span-5 rounded-xl bg-white p-6 shadow-inner ml-4 overflow-y-scroll">
				<h1 className="text-gray-600 text-2xl">{search}</h1>
				<div className="mt-2">asdas</div>
			</main>
		</div>


	);
}
