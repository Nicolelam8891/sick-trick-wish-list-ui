import "./Form.css";
import { useState } from "react"; //need state, dealing with data (updating and making changes)

const Form = () => {
  const [stance, setStance] = useState(""); //dropdown menu for stance
  const [name, setName] = useState(""); //input field for name of tricks
  const [obstacle, setObstacle] = useState(""); //dropdown menu for obstacle
  const [tutorial, setTutorial] = useState(""); //input link field for tutorial
  
  return (
    <form>
      <select value={stance} onChange={(event) => setStance(event.target.value)}>
        <option value=''>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input
        type='text'
        placeholder='Name of Trick'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      >
        <option value=''>Choose your Obstacle</option>
        <option value='FlatGound'>FlatGound</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input 
        type='text'
        placeholder="Link to Tutorial"
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      /> 
      <button>Send it!</button>
    </form>
  );
};


export default Form;
