'use client'
import { useState } from "react";
import ItemTile from "./components/ItemTile";
export default function Home() {
	const [search, setSearch] = useState<string>("");
	const [searchResults, setSearchResults] = useState([]);

	interface Product {
		product_photos: string[];
		product_title: string;
		typical_price_range: string[];
		product_rating: string;
	  }


	const fetchSearch = async() => {
		const request = await fetch('/api/search', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				query: search
			})
		})
		if(!request.ok){
			throw new Error("Could not fetch search data")
		}
		const data = await request.json()
		setSearchResults(data.data.products)
		console.log(data)

	}

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	  };

	return (
		<div className="grid grid-rows-8 grid-cols-8 bg-[#ededed] shadow-xl rounded-2xl border border-gray-300 p-4 h-screen">

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
						<input className="w-full z-20 pl-4 shadow-md h-12 rounded-full border border-gray-300 focus:outline-none focus:border-[#7de49f] focus:ring-2 focus:ring-[#7de49f]" onChange={handleSearch}/>
						<button className="mx-10 hover:bg-slate-500" onClick={fetchSearch}>
							<img src="/search.png" alt="" className="size w-[40px] h-[35px]" />
						</button>
					</div>
				</div>
			</div>

			{/* Left Div */}
			<div className="w-full grid col-start-2 col-span-1 row-span-5 rounded-xl shadow-inner bg-white p-4 text-black">
				<p>Label Filters</p>
			</div>

			{/* Main Content */}
			<main className="col-start-3 col-span-5 row-span-5 rounded-xl bg-white p-6 shadow-inner ml-4 overflow-y-auto flex-grow min-h-0">
				<h1 className="text-gray-600 text-2xl sticky">Search for {search}</h1>
				{searchResults.length > 0 ? (
					searchResults.map((item: Product, index) => (
						<ItemTile
							key={index}
							image={item.product_photos[0]}
							name={item.product_title}
							price={item.typical_price_range?.[0] ?? "-1"}
							rating={item.product_rating}
						/>
					))
				) : (
					"Nothing to display"
				)}
			</main>
		</div>


	);
}
