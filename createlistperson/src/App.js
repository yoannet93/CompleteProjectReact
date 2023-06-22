import { useState } from "react"
import PersonCreate from "./componets/PersonCreate";
//import PersonList from "./componets/PersonList";

function App(){
const [person,setPerson] = useState([])

    const handleCreatedPerson=(name)=>{
      const updatedPerson = [...person, {id:1, name:name}];
      setPerson(updatedPerson)
      console.log(name)
    }
    return (
      <> 
        <div></div>
        <PersonCreate onCreate={handleCreatedPerson} />
       
      </>
    );
}

export default App;