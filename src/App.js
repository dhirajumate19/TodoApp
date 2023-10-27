import Header from "./Component/Header/Header";
import CreateArea from "./Component/CreateArea/CreateArea";
import { useState } from "react";
import Note from "./Component/Note/Note";
import Footer from "./Component/Footer/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const addNotes = (note) => {
    // console.log(title);
    // console.log("content " + notes);
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  };
  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
