import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Registration</h4>
				<hr className="my-4" />

				<form className="mb-2">
					<Input
						label={"Full Name"}
						name={"fullName"}
						id={"fullName"}
						placeholder={"Your Full Name"}
						required
					/>
					<Input
						type={"email"}
						label={"Email"}
						name={"email"}
						id={"email"}
						placeholder={"Your Email"}
						required
					/>
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
					<Input
						label={"Confirm Password"}
						type={"password"}
						name={"cPassword"}
						id={"cPassword"}
						placeholder={"Confirm Password"}
						required
					/>
					<div className="mt-6">
						<Button type="submit" fullWidth>
							Register
						</Button>
					</div>
				</form>
				<div className="text-center">
					Already have an account?{" "}
					<Link to="/login" className="text-indigo-500 mt-4 text-center">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
