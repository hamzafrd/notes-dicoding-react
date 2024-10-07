import React, { Component } from "react";
import { getInitialData } from "../utils";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
      notesQueryResult: [],
    };
  }

  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes, query: "" });
  };

  onArsipHandler = (id, isArchived) => {
    const toggleArsipNotes = [...this.state.notes]
      .filter((note) => note.id === id)
      .map((note) => ({ ...note, archived: !isArchived }));
    const otherNotes = [...this.state.notes].filter((note) => note.id !== id);

    const collectedData = [...otherNotes, ...toggleArsipNotes];

    this.setState({
      notes: collectedData,
      query: "",
    });
  };

  onSearchHandler = (query = "") => {
    this.setState((prevState) => {
      const notes = [...prevState.notes].filter(
        (note) => note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)
      );

      return {
        notesQueryResult: notes,
        query: query,
      };
    });
  };

  onAddNotesHandler = ({ title, body, archived }) => {
    const notesId = this.state.notes.length <= 0 ? 1 : this.state.notes[this.state.notes.length - 1].id + 1;
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: notesId,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: archived,
          },
        ],
      };
    });
  };
  render() {
    return (
      <div className="bg-gray-900 min-h-svh flex flex-col relative">
        <AppHeader cariNotes={this.onSearchHandler} query={this.state.query} />

        <AppMain
          addNotes={this.onAddNotesHandler}
          deleteNotes={this.onDeleteHandler}
          arsipNotes={this.onArsipHandler}
          notes={this.state.query.length > 0 ? this.state.notesQueryResult : this.state.notes}
        />

        <AppFooter />
      </div>
    );
  }
}
