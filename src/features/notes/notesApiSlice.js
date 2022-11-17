import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({});

const initialState = notesAdapter.getInitialState();

export const notesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNotes: builder.query({
			query: () => "/notes",
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			keepUnusedDataFor: 5, //NOTE: 5sec only for development
			transformResponse: (responseData) => {
				const loadedNotes = responseData?.notes.map((note) => {
					note.id = note._id;
					return note;
				});
				return notesAdapter.setAll(initialState, loadedNotes);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: "Note", id: "LIST" },
						...result.ids.map((id) => ({ type: "NOTE", id })),
					];
				} else return [{ type: "Note", id: "LIST" }];
			},
		}),
		createNewNote: builder.mutation({
			query: (initialNoteData) => ({
				url: "/notes",
				method: "POST",
				body: { ...initialNoteData },
			}),
			invalidatesTags: [{ type: "Note", id: "List" }],
		}),
		updateNote: builder.mutation({
			query: (initialNoteData) => ({
				url: "/notes",
				method: "PATCH",
				body: { ...initialNoteData },
			}),
			invalidatesTags: (result, err, args) => [{ type: "Note", id: args.id }],
		}),
		deleteNote: builder.mutation({
			query: ({ id }) => ({
				url: "/notes",
				method: "DELETE",
				body: { id },
			}),
			invalidatesTags: (result, err, args) => [{ type: "Note", id: args.id }],
		}),
	}),
});

export const {
	useGetNotesQuery,
	useCreateNewNoteMutation,
	useUpdateNoteMutation,
	useDeleteNoteMutation,
} = notesApiSlice;

// Selectors
// ========>

// return the query result object
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select();

// create memoized selectors
const selectNoteData = createSelector(
	selectNotesResult,
	(noteResult) => noteResult.data // normalized state object with ids and entities
);

// getSelectors creates these selectors and we rename them with aliases useing destructuring
export const {
	selectAll: selectAllNotes,
	selectById: selectNoteById,
	selectIds: selectNoteIds,
} = notesAdapter.getSelectors((state) => selectNoteData(state) ?? initialState);
