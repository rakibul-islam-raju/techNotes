import User from "./User";
import { useGetUsersQuery } from "./usersApiSlice";

const UsersList = () => {
	const {
		data: users,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetUsersQuery();

	let content;

	if (isLoading) content = <h1>Loading...</h1>;

	if (isError) content = <h1>{error?.data?.message}</h1>;

	if (isSuccess) {
		const { ids } = users;

		const tableContents = ids?.length
			? ids.map((userId) => <User key={userId} userId={userId} />)
			: null;

		content = (
			<table>
				<thead className="">
					<tr>
						{/* <th>Full Name</th> */}
						<th>Username</th>
						{/* <th>Email</th> */}
						<th>Roles</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{tableContents}</tbody>
			</table>
		);
	}

	return content;
};

export default UsersList;
