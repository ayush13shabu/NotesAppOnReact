import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [items, setItems] = useState([]);
    
    function addItem(title){

        return 
    }

return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      <Note 
      key={1} 
      title="Note title" 
      content="Note content" />
      <Footer />
    </div>
  );
}

export default App;

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.