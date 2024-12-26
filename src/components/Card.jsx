import React from 'react'
import "./Card.css"
const Card = ({img,title,desc,rating}) => {
  return (
    <>
    <div class="card">
    <div>
        <img src={img} alt="" />
    </div>
    <div>
        <h3>{title}</h3>
        <p className='limited-para'>{desc}</p>
    </div>
  </div>
</>
  )
}

export default Card