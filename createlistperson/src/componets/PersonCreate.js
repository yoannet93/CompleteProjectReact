import { useState } from 'react'; 
import { useContext } from 'react';
import PersonContext from "../context/person"

function PersonCreate() {
 const [name, setName] = useState('')

 const handleName = (event) => {
   setName(event.target.value);
 };
 
const { createdPerson } = useContext(PersonContext)

 

 const handleSubmit=(event)=>{
    event.preventDefault();
    createdPerson(name);
    setName('');
 }

  return (
    <div className='person-create'>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input className="input" value={name} onChange={handleName} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}

export default PersonCreate;
