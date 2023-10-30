import './Card.css';

const Card = ( { stance, name, obstacle, tutorial, id }) => {
  return (
    <div className='card'>
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
      <p>{id}</p>
    </div>
  )
}

export default Card;