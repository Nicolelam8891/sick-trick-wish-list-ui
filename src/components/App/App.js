import "./App.css";
import React from "react";
import { useState } from "react"; //need to import useState in order to use the component state
import TricksContainer from "../Trick/Trick"; //this is from Trick.js
import Form from "../Form/Form";

const App = () => {
  const dummyData = [
    {
      stance: "regular",
      name: "treflip",
      obstacle: "flat ground",
      tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
      id: 1,
    },
    {
      stance: "switch",
      name: "heelflip",
      obstacle: "stairs",
      tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
      id: 2,
    },
    {
      stance: "regular",
      name: "frontside 50-50, backside 180 out",
      obstacle: "ledge",
      tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
      id: 3,
    },
  ];

  //set State
  //initial value is dummyData 
  //checked components in dev tools, dummyData shows up.
  const [tricks, setTricks] = useState(dummyData);

  return (
    <div className='App'>
      <h1>Sick Trick Wish List</h1>
      <Form /> 
      <TricksContainer tricks={tricks}/> 
    </div>
  );
};

//TricksContaner component from Trick.js, need it here to render on the DOM.

export default App;
