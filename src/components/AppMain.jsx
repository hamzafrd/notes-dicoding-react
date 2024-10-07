import React from "react";
import NotesInput from "./NotesInput";
import CardList from "./CardList";
import SectionMain from "./SectionMain";

export default function AppMain({ addNotes, deleteNotes, arsipNotes, notes }) {
  return (
    <main className="flex-1 flex flex-col relative">
      <SectionMain className="magicpattern">
        <NotesInput addNotes={addNotes} />
      </SectionMain>
      <SectionMain>
        <h2 className="text-4xl p-3">Catatan Aktif</h2>
      </SectionMain>
      <SectionMain>
        <div className="px-5">
          <CardList notes={notes} deleteNotes={deleteNotes} arsipNotes={arsipNotes} />
        </div>
      </SectionMain>
      <SectionMain>
        <h2 className="text-4xl p-3">Arsip Catatan</h2>
      </SectionMain>
      <SectionMain>
        <div className="px-5">
          <CardList notes={notes} deleteNotes={deleteNotes} arsipNotes={arsipNotes} isArchived={true} />
        </div>
      </SectionMain>
    </main>
  );
}
