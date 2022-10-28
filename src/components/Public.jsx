import { Link } from "react-router-dom";

const Public = () => {
	return (
		<div className="container mx-auto p-5">
			<h2 className="">techNotes</h2>
			<hr className="my-2" />
			<div className="">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					doloremque tempore veniam magnam debitis sapiente. Ipsum dignissimos
					ab magni eum aperiam molestiae quis? Ad illum ex necessitatibus.
					Laborum porro a minus illo eius odio culpa soluta ea illum recusandae
					dolor inventore quos aspernatur sed, voluptatem sequi ut modi. Sint
					assumenda quae deleniti dolore dolorem, nemo voluptatibus iure ad
					explicabo enim animi molestias obcaecati fuga possimus corporis libero
					sed repellat? Reiciendis dolorem nemo officiis hic perspiciatis
					sapiente rem optio blanditiis autem.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					doloremque tempore veniam magnam debitis sapiente. Ipsum dignissimos
					ab magni eum aperiam molestiae quis? Ad illum ex necessitatibus.
					Laborum porro a minus illo eius odio culpa soluta ea illum recusandae
					dolor inventore quos aspernatur sed, voluptatem sequi ut modi. Sint
					assumenda quae deleniti dolore dolorem, nemo voluptatibus iure ad
					explicabo enim animi molestias obcaecati fuga possimus corporis libero
					sed repellat? Reiciendis dolorem nemo officiis hic perspiciatis
					sapiente rem optio blanditiis autem.
				</p>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
					<Link
						to="/login"
						className="bg-slate-800 p-4 rounded hover:bg-slate-600 transition"
					>
						<h6>Login</h6>
					</Link>
					<Link
						to="/login"
						className="bg-slate-800 p-4 rounded hover:bg-slate-600 transition"
					>
						<h6>Register</h6>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Public;
