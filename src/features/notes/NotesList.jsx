import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import NoteRow from "./NoteRow";
import { useGetNotesQuery } from "./notesApiSlice";

const NotesList = () => {
	const {
		data: notes,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetNotesQuery();

	console.log("err==>>", notes);

	let content;

	if (isLoading) content = <Loader />;

	if (isError)
		content = (
			<div className="w-7/12 mx-auto my-4">
				<ErrorMessage message={error?.data?.message} />
			</div>
		);

	if (isSuccess) {
		const { ids } = notes;

		const tableContents = ids?.length
			? ids.map((noteId) => <NoteRow key={noteId} noteId={noteId} />)
			: null;

		content = (
			<Table
				headers={["Title", "Completed", "Created", "Updated", "Action"]}
				tbody={<tbody>{tableContents}</tbody>}
			/>
		);
	}

	return (
		<div className="py-4">
			<h4 className="mb-6">Notes list</h4>

			{content}
		</div>
	);
};

export default NotesList;
