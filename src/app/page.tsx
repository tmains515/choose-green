
export default function Home() {
	return (
<div className="grid grid-rows-8 grid-cols-8 bg-[#ededed] shadow-xl rounded-2xl border border-gray-300 p-4 gap-10">
  {/* Header */}
  <header className="w-full grid col-start-2 col-span-6 shadow-md mt-2 p-10 rounded-lg bg-white">
    <h1 className="text-5xl text-green-400">Choose Green</h1>
  </header>

  {/* Navigation */}
  <nav className="w-full grid col-start-3 col-span-4 shadow-md h-16 rounded-full bg-gray-100 border border-gray-300">
  </nav>

  {/* Left Div */}
  <div className="w-full grid col-start-2 col-span-2 row-span-5 rounded-xl shadow-inner bg-white p-4">
    <p>Left content here</p>
  </div>

  {/* Main Content */}
  <main className="col-start-4 col-span-4 row-span-5 rounded-xl bg-white p-6 shadow-inner">
    <p className="text-gray-600 text-center">Main content goes here</p>
  </main>
</div>


	);
}
