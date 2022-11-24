import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../../components/ErrorMessage";

const schema = yup
	.object({
		username: yup.string().min(4).max(24).required(),
		password: yup.string().min(6).max(32).required(),
	})
	.required();

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading, isError, error }] = useLoginMutation();

	const onSubmit = async (data) => {
		try {
			const result = await login(data);
			if (result?.data?.success && result?.data.accessToken) {
				dispatch(setCredentials(result?.data.accessToken));
				reset();
				navigate("/dashboard");
			}
		} catch (err) {
			console.log("err =>", err);
		}
	};

	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Login</h4>
				<hr className="my-4" />

				{isError && <ErrorMessage message={error?.data?.message} />}

				<form className="mb-2" onSubmit={handleSubmit(onSubmit)} noValidate>
					<Input
						label={"Username"}
						name={"username"}
						id={"username"}
						placeholder={"Your Username"}
						required
						register={register}
						error={errors?.username}
						msg={errors?.username?.message}
					/>
					<Input
						label={"Password"}
						type={"password"}
						name={"password"}
						id={"password"}
						placeholder={"Your Password"}
						required
						register={register}
						error={errors?.password}
						msg={errors?.password?.message}
					/>
					<div className="mt-6">
						<Button type="submit" fullWidth loading={isLoading}>
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
							Register
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
