import { useSelector, useDispatch } from "react-redux";
import { getNotesFromAPI } from "./features/notes";
import NotesList from "./components/NotesList";
import Sidebar from "./components/Sidebar";
import SideNotes from "./components/SideNotes";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  console.log(notes);
  return (
    <div className="bg-slate-800 min-h-screen flex">
      <Sidebar />
      <SideNotes />
      <NotesList />
    </div>
  );
}

export default App;
