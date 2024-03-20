import Navbar from "./Navbar";
import "../assets/css/index.css"

export default function Header() {
	return(
		<header>
			<div>
				<Navbar />
				<div id="scroller" className="w-full overflow-scroll h-20 flex justify-between items-center whitespace-nowrap p-2">
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">🎂</span><span className="underline">Birthday</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">🎈</span><span className="underline">Aniversery</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">👶</span><span className="underline">Baby shower</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">👶</span><span className="underline">Haldi</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">👶</span><span className="underline">Mr Beast Fest</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">👶</span><span className="underline">Blind Date</span></div>
					<div className="w-[33%] h-auto inline-flex flex-col items-center cursor-pointer"><span className="text-2xl">👶</span><span className="underline">Mr Beast Challenge</span></div>
				</div>
			</div>
		</header>
	)
}
