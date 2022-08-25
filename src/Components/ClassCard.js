import React from 'react'
import "../index.css"

const ClassCard = ({assignments}) => {
  const {category} = assignments
  return (
    <div>
       <option value={category}>{category}</option>
    </div>
  )
}

export default ClassCard