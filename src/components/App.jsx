import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNote => {
            return [...prevNote, newNote]
        })
    }

    function deleteNote(id){
        return setNotes(prevNotes => {
            prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}/>
      {notes.map((noteItem) => {
            return <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete = {deleteNote}
            />;
        })}
      <Footer />
    </div>
  );
}

export default App;

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.