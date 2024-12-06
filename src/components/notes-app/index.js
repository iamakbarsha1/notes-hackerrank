import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [noteObj, setNoteObj] = useState({
    title: "",
    status: "",
  });
  const [filter, setFilter] = useState("all");

  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  // "start": "PORT=8000 react-scripts start",
  const onHandleValueChange = (e) => {
    const { name, value } = e.target;
    console.log("e.target - " + e.target);
    setNoteObj({ ...noteObj, [name]: value });
  };

  const onAddNoteClick = () => {
    // if (noteObj.title && noteObj.status) {
    setNotes((prevNote) => [...prevNote, noteObj]);
    setNoteObj({ title: "", status: "" });
    // } else {
    //   alert("Enter title and status!");
    // }
  };

  const filteredNotes = useMemo(() => {
    // console.log("filteredNotes");
    switch (filter) {
      case "active":
        return notes.filter((note) => note.status.toLowerCase() === "active");
      case "completed":
        return notes.filter(
          (note) => note.status.toLowerCase() === "completed"
        );
      default:
        return notes
          .filter((note) => note.status.toLowerCase() === "active")
          .concat(
            notes.filter((note) => note.status.toLowerCase() === "completed"),
            notes.filter(
              (note) =>
                note.status.toLowerCase() !== "active" &&
                note.status.toLowerCase() !== "completed"
            )
          );
    }
  }, [notes, filter]);

  useEffect(() => {
    console.log("filteredNotes is running");
  }, [filteredNotes]);

  // useEffect(() => {
  //   const showNotes = setTimeout(() => {
  //     filteredNotes();
  //   }, 1000);

  //   return () => clearTimeout(showNotes);
  // }, []);

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          name="title"
          className="large mx-8"
          placeholder="Note Title"
          value={noteObj?.title}
          onChange={(e) => onHandleValueChange(e)}
        />
        <input
          data-testid="input-note-status"
          type="text"
          name="status"
          className="large mx-8"
          placeholder="Note Status"
          value={noteObj?.status}
          onChange={(e) => onHandleValueChange(e)}
        />
        <button
          className=""
          data-testid="submit-button"
          onClick={onAddNoteClick}
        >
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={() => setFilter("all")}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={() => setFilter("active")}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={() => setFilter("completed")}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {filteredNotes.map((note, index) => {
              return (
                <tr key={index}>
                  <td>{note.title}</td>
                  <td>{note.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default NotesApp;
