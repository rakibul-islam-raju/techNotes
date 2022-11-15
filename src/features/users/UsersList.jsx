import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import UserRow from "./UserRow";
import { useGetUsersQuery } from "./usersApiSlice";

const UsersList = () => {
	const {
		data: users,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetUsersQuery();

	console.log("err==>>", error);

	let content;

	if (isLoading) content = <Loader />;

	if (isError)
		content = (
			<div className="w-7/12 mx-auto my-4">
				<ErrorMessage message={error?.data?.message} />
			</div>
		);

	if (isSuccess) {
		const { ids } = users;

		const tableContents = ids?.length
			? ids.map((userId) => <UserRow key={userId} userId={userId} />)
			: null;

		content = (
			<Table
				headers={["Username", "Roles", "Status", "Actions"]}
				tbody={<tbody>{tableContents}</tbody>}
			/>
		);
	}

	return (
		<div className="py-4">
			<h4 className="mb-6">Users list</h4>

			{content}
		</div>
	);
};

export default UsersList;
