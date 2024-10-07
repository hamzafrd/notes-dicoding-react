import React from "react";

export default function CardButton({ deleteNotes, arsipNotes, id, isArchived }) {
  return (
    <div className="grid grid-cols-2 text-center">
      <button
        className="text-red-500 font-semibold border-r"
        onClick={() => {
          deleteNotes(id);
        }}>
        Delete
      </button>
      <button
        className="text-yellow-500 font-semibold"
        onClick={() => {
          arsipNotes(id, isArchived);
        }}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}
