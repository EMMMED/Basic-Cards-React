import React from "react";
import '../../styles/Testimony.css'

// export function Testimony()
function Testimony( props ) {
  return (
    <div className="container-testimony">
      <img 
      className="img-testimony"
      src={require(`../../img/${props.name.toLowerCase()}.png`)} 
      alt={`foto de ${props.name}`} />
      <div className="container-text-testimony">
        <p className="name-testimony">
          <strong>{props.name}</strong> in <strong>{props.country}</strong>
        </p>
        <span className="position-testimony">
          {props.position} in <strong>{props.company}</strong>
        </span>
        <p className="about-testimony">{props.about}</p>
      </div>
    </div>
  )
}

export default Testimony

