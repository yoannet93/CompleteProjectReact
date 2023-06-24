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
