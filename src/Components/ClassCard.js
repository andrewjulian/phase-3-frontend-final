import React from 'react'
import "../index.css"

const ClassCard = ({assignment}) => {
  const {category} = assignment
  console.log(category)
  return (
       <option value={category}>{category}</option>
  )
}

export default ClassCard