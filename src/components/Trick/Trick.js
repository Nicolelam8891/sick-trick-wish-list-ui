import './Trick.css';
import Card from '../Card/Card';

//console log for prop working
//cards rendering on DOM
const TricksContainer = ( {tricks} ) => {
  // console.log("tricks:=====", tricks);
  const trickCards = tricks.map((trick) => {
    const { stance, name, obstacle, tutorial, id } = trick;
  
  return (
    <Card 
    stance={stance}
    name={name}
    obstacle={obstacle}
    tutorial={tutorial}
    id={id}
    key={id}
    />
  )
})

  return (
    <div className='trick-container'>
      {trickCards}
    </div>
  )
}

export default TricksContainer;