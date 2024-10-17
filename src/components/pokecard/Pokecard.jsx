import React from "react";
import "./Pokecard.css";
import Card from 'react-bootstrap/Card';

const Pokecard = ({ id, name, type, exp }) => {
    return (
      <>
        <Card className="text-bg-secondary" style={{ width: '18rem' }}>
      <Card.Body className="text-bg-dark">
        <Card.Title className="text-primary mb-1">{name}</Card.Title>
        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <Card.Text>
          Type: {type}
        </Card.Text>
        <Card.Text>
          EXP: {exp}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    )
}

export default Pokecard;