import { useState, useContext } from "react";
import PersonContext from "../context/person";
import PersonEdit from "./PersonEdit";



function PersonShow({ person }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deletePersonById } = useContext(PersonContext);

   const handleDeleteClick = () => {
     deletePersonById(person.id);
   };
   
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
 

  const handleSubmit = () => {
    setShowEdit(false);
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
