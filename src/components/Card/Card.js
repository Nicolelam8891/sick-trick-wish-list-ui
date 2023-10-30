import './Card.css';

const Card = ( { stance, name, obstacle, tutorial, id }) => {
  return (
    <div className='card'>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to tutorial:</p>
      <a href={tutorial} target='_blank' rel='noopener noreferrer'>
        {tutorial}
      </a>
    </div>
  );
};

export default Card;