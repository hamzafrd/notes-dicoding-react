import React from "react";
import NotesSearch from "./NotesSearch";
export default function AppHeader({ cariNotes, query }) {
  return (
    <header className="border-b border-gray-500">
      <div className="container flex items-center justify-between px-5 py-3 border-x border-gray-500">
        <h1 className="text-4xl">
          Noted <span className="text-5xl">.</span>
        </h1>

        <div>
          <NotesSearch cariNotes={cariNotes} query={query} placeholder="Seach Your Notes..." />
        </div>
      </div>
    </header>
  );
}
