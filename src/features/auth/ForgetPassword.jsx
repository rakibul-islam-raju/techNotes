import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ForgetPassword = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Forget Password</h4>
				<hr className="my-4" />

				<form className="mb-2">
					<Input
						type="email"
						label={"Email"}
						name={"email"}
						id={"email"}
						placeholder={"Your Email"}
						required
					/>
					<div className="mt-6">
						<Button type="submit" fullWidth>
							Submit
						</Button>
					</div>
				</form>
				<div className="text-center text-lg">
					<div>
						Remember password?{" "}
						<Link to="/login" className="text-indigo-500 mt-4 text-center">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
