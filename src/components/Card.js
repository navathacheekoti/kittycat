import React from 'react'
import 'tachyons';
const Card= ({cat,email}) => {
    return (
      <div className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/set_set4/${cat}/3.14159?size=150x150`} alt=" cat"/>
        <div>
          <h3>{cat}</h3>
          <p>{email} </p>
          
        </div>

      </div>
    )
  
}

export default Card;

