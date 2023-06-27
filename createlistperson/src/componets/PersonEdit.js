import { useState } from "react";
import { useContext } from "react";
import PersonContext from "../context/person";


function PersonEdit({ person, onSubmit }) {
  const [newName, setNewName] = useState(person.name);

  const { editNameById } = useContext(PersonContext);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editNameById(person.id, newName);
  };

  return (
    <form className="person-edit" onSubmit={handleSubmit}>
      <label>Enter new Name</label>
      <input className="input" value={newName} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default PersonEdit;
