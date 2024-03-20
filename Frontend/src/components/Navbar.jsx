import "../assets/css/index.css"

export default function Navbar() {
	return (
		<nav className="bg-purple-400 text-white">
			{/* For know Just a skeleton */}
			<div>

				<div className="flex justify-between items-center p-4">
					{/* Logo OR Company Icon */}
					<div>
						<h1 className="text-3xl font-bold">Occasion's</h1>
					</div>

					{/* Nav menu Icon */}
					<div className="inline-flex justify-center items-center w-[45px] h-[45px] md:hidden border border-black rounded-full cursor-pointer">
						<i className="fa-solid fa-bars text-2xl"></i>
					</div>

					{/* Click Nav menu */}
					<ul className="hidden md:block">
						<li>
							<i className="fa-solid fa-question text-2xl"></i>
							<span>HELP CENTER</span>
						</li>
						<li>
							<i className="fa-solid fa-user text-2xl"></i>
							<span>LOG-IN</span>
						</li>
					</ul>
				</div>

				{/* Search bar */}
				<div className="w-full flex justify-center py-3">
					<label className="inline-flex w-[90%] h-[40px] bg-white text-black items-center gap-2 p-1 rounded-full" htmlFor="search">
						<input className="p-1 px-3 w-[90%] rounded-full" type="text" placeholder="Search" />
						<span className="p-1 px-2"><i className="fa-solid fa-magnifying-glass text-xl"></i></span>
					</label>
				</div>
			</div>
		</nav>
	)
}
