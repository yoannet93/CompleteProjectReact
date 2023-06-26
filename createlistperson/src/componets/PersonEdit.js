import { useState } from "react";


function PersonEdit({ person, onSubmit }) {
  const [newName, setNewName] = useState(person.name);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(person.id, newName);
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
