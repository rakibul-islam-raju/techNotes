import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => "/users",
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			keepUnusedDataFor: 5, //NOTE: 5sec only for development
			transformResponse: (responseData) => {
				const loadedUsers = responseData?.users.map((user) => {
					user.id = user._id;
					return user;
				});
				return usersAdapter.setAll(initialState, loadedUsers);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: "User", id: "LIST" },
						...result.ids.map((id) => ({ type: "USER", id })),
					];
				} else return [{ type: "User", id: "LIST" }];
			},
		}),
	}),
});

export const { useGetUsersQuery } = usersApiSlice;

// Selectors
// ========>

// return the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

// create memoized selectors
const selectUserData = createSelector(
	selectUsersResult,
	(userResult) => userResult.data // normalized state object with ids and entities
);

// getSelectors creates these selectors and we rename them with aliases useing destructuring
export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => selectUserData(state) ?? initialState);
