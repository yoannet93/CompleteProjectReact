import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App(){
const [book, setBook]=useState([]); 
const createBook = (title)=>{
  console.log(title)
}

return(
    <>
    <BookCreate onCreate={createBook}/>
    
    </>
);
}

export default App;