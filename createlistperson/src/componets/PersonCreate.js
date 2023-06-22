import { useState } from 'react'; 

function PersonCreate({ onCreate }) {
 const [name, setName] = useState('')
 const handleName=(event)=>{
    setName(event.target.value);
 }

 const handleSubmit=(event)=>{
    event.preventDefault();
    onCreate(name);
    setName('');
 }

  return (
    <form onSubmit={handleSubmit}>
        <label></label>
        <input value={name} onChange={handleName} />
        <button>Create!</button>
    </form>

  );
}

export default PersonCreate;
