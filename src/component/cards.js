import React from 'react';


export const Card = (props) => {
    return (
        <div className="card">
            <img  src={props.link} className="imgcard" alt={props.name}/>
            <p className="namecard">{props.name}</p>
        </div>
    );
}

export default Card;
