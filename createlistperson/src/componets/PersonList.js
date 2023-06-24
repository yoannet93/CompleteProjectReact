import PersonShow from "./PersonShow";

function PersonList({ person, onEdit, onDelete }) {
  const renderedPerson = person.map((person) => {
    return (
      <PersonShow key={person.id} onEdit={onEdit} onDelete={onDelete} person={person} />
    );
  });

  return <div>{renderedPerson}</div>;
}

export default PersonList;
