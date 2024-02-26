import React from "react";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNoteFromUser } from "../features/notes";

export default function Edit() {
  const dispatch = useDispatch();
  const [inputsStates, setInputsStates] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
  });
  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(inputsStates).every((value) => value)) {
      setShowValidation({
        title: false,
        subtitle: false,
        bodyText: false,
      });

      dispatch(addNoteFromUser({ ...inputsStates, id: nanoid(8) }));
      setInputsStates({
        title: "",
        subtitle: "",
        bodyText: "",
      });
    } else {
      for (const [key, value] of Object.entries(inputsStates)) {
        if (value.length === 0) {
          setShowValidation((state) => ({ ...state, [key]: true }));
        } else {
          setShowValidation((state) => ({ ...state, [key]: false }));
        }
      }
    }
  }

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une note</p>

      <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-slate-100" htmlFor="title">
          Le titre
        </label>
        <input
          onChange={(e) =>
            setInputsStates({ ...inputsStates, title: e.target.value })
          }
          className="p-2 text-md block w-full rounded bg-slate-200"
          value={inputsStates.title}
          type="text"
          id="title"
          spellCheck="false"
        />
        {showValidation.title && (
          <p className="text-red-400 mb-2">Veuillez renseigner un titre.</p>
        )}

        <label className="mb-2 mt-4 block text-slate-100" htmlFor="subtitle">
          Le sous-titre
        </label>
        <input
          onChange={(e) =>
            setInputsStates({ ...inputsStates, subtitle: e.target.value })
          }
          className="p-2 text-md block w-full rounded bg-slate-200"
          value={inputsStates.subtitle}
          type="text"
          id="subtitle"
          spellCheck="false"
        />
        {showValidation.subtitle && (
          <p className="text-red-400 mb-2">
            Veuillez renseigner un sous-titre.
          </p>
        )}

        <label className="mb-2 mt-4 block text-slate-100" htmlFor="bodyText">
          Contenue de la note
        </label>
        <textArea
          onChange={(e) =>
            setInputsStates({ ...inputsStates, bodyText: e.target.value })
          }
          className="w-full min-h-[300px] p-2 rounded bg-slate-200"
          value={inputsStates.bodyText}
          id="bodyText"
          spellCheck="false"
        ></textArea>
        {showValidation.bodyText && (
          <p className="text-red-400 mb-2">Veuillez écrire du contenue.</p>
        )}
        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
