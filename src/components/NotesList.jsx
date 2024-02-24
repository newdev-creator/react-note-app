import React from "react";
import { useSelector } from "react-redux";

export default function NotesList() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  return <div>NotesList</div>;
}
