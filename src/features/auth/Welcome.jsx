import React from "react";

const Welcome = () => {
	return (
		<div className="py-4">
			<h4>
				Welcome <span className="text-indigo-400">Raju</span>
			</h4>

			<div className="mt-8 flex gap-4">
				<div className="w-full md:6/12 lg:w-8/12">
					<div className="shadow-lg p-4">
						<h5>Wheather Information</h5>
					</div>
				</div>
				<div className="w-full md:6/12 lg:w-4/12">
					<div className="shadow-lg p-4">
						<h5>Your Recent Notes</h5>
						<ul className="mt-2 flex flex-col gap-2">
							<li className="rounded px-2 py-1 bg-slate-800 hover:bg-indigo-500 transition">
								<div className="text-lg font-semibold text-gray-300">
									Lorem ipsum dolor sit.
								</div>
								<div className="text-sm text-gray-400">05 November, 2022</div>
							</li>
							<li className="rounded px-2 py-1 bg-slate-800 hover:bg-indigo-500 transition">
								<div className="text-lg font-semibold text-gray-300">
									Lorem ipsum dolor sit.
								</div>
								<div className="text-sm text-gray-400">05 November, 2022</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
