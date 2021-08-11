import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.content.imgUrl} alt="Cat" className="card-img-top" />
            <div className="card-body">
                <h5>{props.content.title }</h5>
                <small className="text-muted">{props.content.published}</small>
            </div>
        </div> 
    );
}

export default Card;