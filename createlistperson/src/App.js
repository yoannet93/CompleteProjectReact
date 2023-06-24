import { useState } from "react";
import PersonCreate from "./componets/PersonCreate";
import PersonList from "./componets/PersonList";

function App() {
  const [person, setPerson] = useState([]);

  const handleCreatedPerson = (name) => {
    const updatedPerson = [
      ...person,
      { id: Math.round(Math.random() * 999), name: name },
    ];
    setPerson(updatedPerson);
  };

  const editNameById = (id, newName) => {
    const updatedName = person.map((person) => {
      if (person.id === id) {
        return { ...person, name: newName };
      }
      return person;
    });
    setPerson(updatedName);
  };

  const deletePersonById = (id) => {
    const updatedPerson = person.filter((person) => {
      return person.id !== id;
    });
    setPerson(updatedPerson);
  };

  return (
    <div className="app">
      <h1>Add a new Person</h1>
      <PersonCreate onCreate={handleCreatedPerson} />
      <PersonList
        onEdit={editNameById}
        onDelete={deletePersonById}
        person={person}
      />
    </div>
  );
}

export default App;
