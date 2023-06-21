import { useState } from "react";
import Records from "./components/Records";
import Search from "./components/Search";
import ShowVideoList from "./components/ShowVideoList";

function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Search changes={handleChange} valor={text} />
      <Records texto={text} />
      <ShowVideoList />
    </>
  );
}

export default App;
