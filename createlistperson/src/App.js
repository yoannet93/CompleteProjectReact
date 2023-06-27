import { useContext, useEffect } from "react";
import PersonContext from "./context/person";

import PersonCreate from "./componets/PersonCreate";
import PersonList from "./componets/PersonList";

function App() {
  const { fetchPerson } = useContext(PersonContext);

  useEffect(() => {
    fetchPerson();
  }, [fetchPerson]);

  return (
    <div className="app">
      <h1>Add a new Person</h1>
      <PersonCreate />
      <PersonList />
    </div>
  );
}

export default App;
