import React from "react";
function Card({ name, email, id }) {
    return (
        <div className="bg-light-green br3 dib pa3 ma2 grow">
            <a href="https://www.google.co.uk/" target="_blank" rel="noreferrer"><img alt='cardphoto' src={`https://robohash.org/${id}?200x200`} /></a>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;