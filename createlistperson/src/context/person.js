import { useState, createContext, useCallback } from "react";
import axios from "axios";

const PersonContext = createContext();

function Provider({ children }) {
  const [person, setPerson] = useState([]);

  const fetchPerson = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/person");
    setPerson(response.data);
  },[]);

  const createdPerson = async (name) => {
    const response = await axios.post("http://localhost:3001/person", {
      name,
    });
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

  const valueToShare = {
    person,
    fetchPerson,
    createdPerson,
    editNameById,
    deletePersonById,
  };

  return (
    <PersonContext.Provider value={valueToShare}>
      {children}
    </PersonContext.Provider>
  );
}

export { Provider };
export default PersonContext;
