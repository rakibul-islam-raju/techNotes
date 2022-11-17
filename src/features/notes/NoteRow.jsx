import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faCircleXmark,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

const NoteRow = ({ noteId }) => {
	const navigate = useNavigate();
	const note = useSelector((state) => selectNoteById(state, noteId));

	console.log("noteId", noteId);
	console.log("single note =>", note);

	if (note) {
		const handleEdit = () => navigate(`/dashboard/notes/${noteId}`);

		return (
			<tr>
				<td>{note?.title}</td>
				<td>
					{note?.completed ? (
						<FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
					) : (
						<FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
					)}
				</td>
				<td>{new Date(note?.updatedAt).toLocaleDateString()}</td>
				<td>{new Date(note?.createdAt).toLocaleDateString()}</td>
				<td>
					<button onClick={handleEdit}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
				</td>
			</tr>
		);
	} else return;
};

export default NoteRow;
