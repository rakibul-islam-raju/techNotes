import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";

const User = ({ userId }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => selectUserById(state, userId));

	if (user) {
		const handleEdit = () => navigate(`/dashboard/users/${userId}`);
		const userRoles = user.roles.toString().replaceAll(",", ", ");
		const cellStatus = user.active ? "active" : "inactive";
		return (
			<tr>
				<td>{user.username}</td>
				<td>{userRoles}</td>
				<td>{user.active}</td>
				<td>
					<button onClick={handleEdit}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
				</td>
			</tr>
		);
	} else return;
};

export default User;
