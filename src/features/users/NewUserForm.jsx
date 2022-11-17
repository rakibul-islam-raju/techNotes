import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateNewUserMutation } from "./usersApiSlice";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import * as yup from "yup";
YupPassword(yup);

const schema = yup
	.object({
		username: yup.string().min(4).max(12).required(),
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
	const [createNewUser, { isLoading, isSuccess, data, isError, error }] =
		useCreateNewUserMutation();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => console.log(data);

	return (
		<div className="py-4">
			<h2>Create New User</h2>
			<hr className="my-4" />
			<div className="card w-4/12 mx-auto mt-6">
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
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
						<Button type="submit" fullWidth>
							Create Account
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewUserForm;
