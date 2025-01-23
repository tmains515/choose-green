import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-8 grid-cols-8 bg-[#ededed] shadow-xl rounded-2xl border border-gray-300 p-4">
			<header className="w-full grid col-start-3 col-span-4 shadow-md mt-2 p-10 rounded-lg bg-white">
				<h1 className="text-5xl text-green-400">Choose Green</h1>
			</header>

			<nav className="w-full grid col-start-4 col-span-2 shadow-md mt-4 p-2 h-10 rounded-full bg-gray-100 border border-gray-300">
			</nav>

			<div className="w-full"></div>

			<main className="col-span-8 row-span-6 rounded-xl bg-white p-6 shadow-inner">
				<p className="text-gray-600 text-center">Main content goes here</p>
			</main>
		</div>

	);
}
