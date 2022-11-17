import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
	.object({
		username: yup.string().min(4).max(12).required(),
		password: yup.string().min(6).max(32).required(),
	})
	.required();

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => console.log(data);

	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Login</h4>
				<hr className="my-4" />

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
