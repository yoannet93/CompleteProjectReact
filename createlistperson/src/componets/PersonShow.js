import { useState } from "react";
import PersonEdit from "./PersonEdit";

function PersonShow({ person, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState("");

  const handleSubmit = (id, newName) => {
    setShowEdit(false);
    onEdit(id, newName);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleDeleteClick = () => {
    onDelete(person.id);
  };

  let content = <h3>{person.name}</h3>;
  if (showEdit) {
    content = <PersonEdit onSubmit={handleSubmit} person={person} />;
  }

  return (
    <div className="person-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PersonShow;
