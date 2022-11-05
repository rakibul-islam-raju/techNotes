import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Login</h4>
				<hr className="my-4" />

				<form className="mb-2">
					<Input
						label={"Username"}
						name={"username"}
						id={"username"}
						placeholder={"Your Username"}
						required
					/>
					<Input
						label={"Password"}
						type={"password"}
						name={"password"}
						id={"password"}
						placeholder={"Your Password"}
						required
					/>
					<div className="mt-6">
						<Button type="submit" fullWidth>
							Login
						</Button>
					</div>
				</form>
				<div className="text-center text-lg">
					<div>
						<Link
							to="/reset-password"
							className="text-indigo-500 mt-4 text-center"
						>
							Forgot password?
						</Link>
					</div>
					<div>
						Don't have an account?{" "}
						<Link
							to="/registration"
							className="text-indigo-500 mt-4 text-center"
						>
							Register now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
