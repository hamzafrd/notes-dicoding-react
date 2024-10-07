import React from "react";
import CardItem from "./CardItem";
import NoDataPlaceholder from "/no-data-placeholder.png";

export default function CardList({ notes, deleteNotes, arsipNotes, isArchived }) {
  const filteredNotes = isArchived ? notes.filter((note) => note.archived) : notes.filter((note) => !note.archived);
  return (
    <div className="grid grid-cols-4 gap-3 py-5">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => {
          return <CardItem key={note.id} note={note} deleteNotes={deleteNotes} arsipNotes={arsipNotes} />;
        })
      ) : (
        <div className="col-span-4 text-center">
          <img src={NoDataPlaceholder} alt="noDataPlaceholder" className="w-40 invert" />
          <p>Tidak Ada Notes.</p>
        </div>
      )}
    </div>
  );
}
