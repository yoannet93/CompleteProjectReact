import PersonShow from "./PersonShow";
import { useContext } from "react";
import PersonContext from "../context/person";

function PersonList() {
const { person } = useContext(PersonContext); 

  const renderedPerson = person.map((person) => {
    return (
      <PersonShow key={person.id} person={person} />
    );
  });

  return <div className="person-list">{renderedPerson}</div>;
}

export default PersonList;
