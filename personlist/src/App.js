import CreatePerson from "./components/CreatePerson";
import PersonList from "./components/PersonList";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState([]);

  const handleSubmit = (name) => {
    const updatedPerson = [...person, name];
    setPerson(updatedPerson);

  };

  return (
    <div className="bg-teal-500 w-1/3 h-screen container ">
      <h1 className="font-mono text-2xl px-2 pt-4">Enter Your Personal Data</h1>
      <CreatePerson onChange={handleSubmit} />
      <PersonList value={person} />
    </div>
  );
}

export default App;
