import React from "react";
import { showFormattedDate } from "../utils";
import CardButton from "./CardButton";

export default function CardItem({ note, deleteNotes, arsipNotes }) {
  return (
    <div className="grid max-h-max grid-cols-12 border [&>*]:px-3 [&>*]:py-1">
      <div className="col-span-2  border-r border-b col-start-1">
        <p>{note.id}</p>
      </div>

      <div className="col-span-10 border-b">
        <p>{note.title}</p>
      </div>

      <div className="col-span-12 border-b">
        <p>{showFormattedDate(note.createdAt)}</p>
      </div>

      <div className="col-span-12 h-[10rem]">
        <p className="line-clamp-6">{note.body}</p>
      </div>

      <div className="col-span-12 border-t">
        <CardButton deleteNotes={deleteNotes} arsipNotes={arsipNotes} id={note.id} isArchived={note.archived} />
      </div>
    </div>
  );
}
