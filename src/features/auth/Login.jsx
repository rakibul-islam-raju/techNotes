import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Login</h4>
				<hr className="my-2" />

				<form className="mb-2">
					<Input
						name={"username"}
						id={"username"}
						placeholder={"Username"}
						required
					/>
					<Input
						type="password"
						name={"username"}
						id={"username"}
						placeholder={"Username"}
						required
					/>
					<Button type="submit" fullWidth>
						Login
					</Button>
				</form>
				<div className="text-center">
					<Link to="/" className="text-indigo-500 mt-4 text-center">
						Forgot password?
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
