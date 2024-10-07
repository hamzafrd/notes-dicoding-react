import React from "react";

export default function NotesSearch({ cariNotes, query, placeholder }) {
  return (
    <>
      <input onChange={(e) => cariNotes(e.target.value)} value={query} placeholder={placeholder} />
    </>
  );
}
