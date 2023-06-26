import { useState, useEffect } from "react";
import axios from "axios";
import PersonCreate from "./componets/PersonCreate";
import PersonList from "./componets/PersonList";

function App() {
  const [person, setPerson] = useState([]);

  const fetchPerson = async () => {
    const response = await axios.get("http://localhost:3001/person");
    setPerson(response.data);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const handleCreatedPerson = async (name) => {
    const response = await axios.post("http://localhost:3001/person", { name });
    const updatedPerson = [...person, response.data];
    setPerson(updatedPerson);
  };

  const editNameById = async (id, newName) => {
    const response = await axios.put(`http://localhost:3001/person/${id}`, {
      newName,
    });

    const updatedName = person.map((person) => {
      if (person.id === id) {
        return { ...person, ...response.data };
      }
      return person;
    });
    setPerson(updatedName);
  };

  const deletePersonById = async (id) => {
    await axios.delete(`http://localhost:3001/person/${id}`);

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
