import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        }
        )
    }
  return (
    <div>
      <form>
        <input name="title" 
        type="text"
        placeholder="Title" 
        onChange={handleChange}
        value={note.title}
        />

        <textarea name="content" 
        type="text" 
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..." 
        rows="3" />

        <button
        onClick={() => {
          props.onAdd(note);
          setNote("")
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.
