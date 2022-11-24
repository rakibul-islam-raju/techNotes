import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateNewUserMutation } from "./usersApiSlice";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import * as yup from "yup";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
YupPassword(yup);

const schema = yup
	.object({
		username: yup.string().min(4).max(24).required(),
		password: yup
			.string()
			.min(6)
			.max(32)
			.minLowercase(1)
			.minUppercase(1)
			.minNumbers(1)
			.minSymbols(1)
			.required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "passwords must match"),
	})
	.required();

const NewUserForm = () => {
	const navigate = useNavigate();
	const [createNewUser, { isLoading, isSuccess, data, isError, error }] =
		useCreateNewUserMutation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [errorMessage, setErrorMessage] = useState(null);

	const onSubmit = async (data) => {
		console.log(data);
		await createNewUser(data);
	};

	useEffect(() => {
		if (data?.success) {
			window.alert("User created!"); //Todo replace with a toast
			reset();
			navigate("/login");
		} else {
			setErrorMessage(data?.error);
		}
	}, [data, reset, navigate]);

	return (
		<div className="flex h-screen">
			<div className="m-auto card w-4/12">
				<h4>Create New Account</h4>
				<hr className="my-4" />
				{errorMessage && <ErrorMessage message={errorMessage} />}

				<form className="mb-2" onSubmit={handleSubmit(onSubmit)} noValidate>
					<Input
						required
						label={"Username"}
						name={"username"}
						id={"username"}
						placeholder={"Your Username"}
						register={register}
						error={errors?.username}
						msg={errors?.username?.message}
					/>
					<Input
						required
						type="password"
						label={"Password"}
						name={"password"}
						id={"password"}
						placeholder={"Your Password"}
						register={register}
						error={errors?.password}
						msg={errors?.password?.message}
					/>
					<Input
						required
						type="password"
						label={"Confirm Password"}
						name={"confirmPassword"}
						id={"confirmPassword"}
						placeholder={"Confirm Password"}
						register={register}
						error={errors?.confirmPassword}
						msg={errors?.confirmPassword?.message}
					/>
					<div className="mt-6">
						<Button type="submit" loading={isLoading} fullWidth>
							Create Account
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

export default NewUserForm;
