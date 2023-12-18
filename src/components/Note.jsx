import DeleteIcon from "../svgs/DeleteIcon";

const Note = ({ note, getNotes }) => {
  // destructor note object
  const { note: text, id } = note;

  // delete note
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://social-c467a-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete this note.");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="card card-ctr">
      <h3> + {text}</h3>
      <div onClick={deleteNote}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
