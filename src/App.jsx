import { useSelector, useDispatch } from "react-redux";
import { getNotesFromAPI } from "./features/notes";
import NotesList from "./components/NotesList";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  console.log(notes);
  return (
    <>
      <NotesList />
    </>
  );
}

export default App;
