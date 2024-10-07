import React, { Component } from "react";

export default class NotesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      maxChar: 50,
    };
  }

  onTitleChangeEventHandler = (event) => {
    const maxChar = 50;
    const inputValue = event.target.value;

    // if (inputValue.length <= maxChar) {
    // }
    this.setState({
      title: inputValue.slice(0, maxChar),
      maxChar: maxChar - inputValue.length,
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onArchiveChangeEventHandler = (event) => {
    this.setState({
      archived: event.target.checked,
    });
  };

  onSubmitEventHandler = (e) => {
    e.preventDefault();

    this.props.addNotes(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitEventHandler} className="border flex flex-col gap-3 w-3/6 m-3 p-4 rounded-md">
          <p className="text-xl text-right">Sisa Karater : {this.state.maxChar}</p>

          <input
            required
            type="text"
            placeholder="Masukan Judul Notes"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            required
            type="text"
            placeholder="Masukan Isi Notes Anda.."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />

          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              id="isArchived"
              name="isArchived"
              checked={this.state.archived}
              onChange={this.onArchiveChangeEventHandler}
            />
            <label htmlFor="isArchived">Masukan ke Arsip Catatan </label>
          </div>
          <button className="bg-gray-900 border-white border rounded-md p-1">Buat</button>
        </form>
      </>
    );
  }
}
