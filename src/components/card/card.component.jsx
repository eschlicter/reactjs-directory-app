import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="student" src={`https://robohash.org/${props.student.id}?set=set5&size=180x180`} />
        <h1>{props.student.name}</h1>
        <p>{props.student.email}</p>
    </div>
);