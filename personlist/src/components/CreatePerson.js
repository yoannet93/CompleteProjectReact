import Button from "./Button";
import { useState } from "react";
import Label from "./Label";
import Input from "./Input";

function CreatePerson({ onChange }) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    //console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(name);
    console.log(name);
    setName("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ml-5 py-5">
        <Label>Name</Label>
        <Input name="name" value={name} onChange={handleChange} />
        <Label>Last Name</Label>
        <Input />
        <Label>Email</Label>
        <Input name="email" type="email" />
        <Label>Years of experience</Label>
        <Input type="number" name="years" />
        <Label>Position</Label>
        <select name="position">
          <option value={0}>Select an option...</option>
          <option value={1}>Full stack Developer</option>
          <option value={2}>Front-End Developer</option>
        </select>
        <Button secondary className="rounded mt-10">
          Send
        </Button>
      </form>
    </div>
  );
}

export default CreatePerson;
