import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import "./App.css";
import Register from "./features/auth/Register";
import ForgetPassword from "./features/auth/ForgetPassword";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Public />} />
					<Route path="login" element={<Login />} />
					<Route path="registration" element={<Register />} />
					<Route path="reset-password" element={<ForgetPassword />} />

					<Route path="dashboard" element={<DashboardLayout />}>
						<Route index element={<Welcome />} />
						<Route path="notes">
							<Route index element={<NotesList />} />
						</Route>
						<Route path="users">
							<Route index element={<UsersList />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
