import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import NewNote from "./features/notes/NewNote";
import EditNote from "./features/notes/EditNote";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import ForgetPassword from "./features/auth/ForgetPassword";
import "./App.css";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Public />} />
					<Route path="login" element={<Login />} />
					<Route path="registration" element={<NewUserForm />} />
					<Route path="reset-password" element={<ForgetPassword />} />

					<Route path="dashboard" element={<DashboardLayout />}>
						<Route index element={<Welcome />} />
						<Route path="users">
							<Route index element={<UsersList />} />
							<Route path=":id" element={<EditUser />} />
							{/* <Route path="new" element={<NewUserForm />} /> */}
						</Route>
						<Route path="notes">
							<Route index element={<NotesList />} />
							<Route path=":id" element={<EditNote />} />
							<Route path="new" element={<NewNote />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
