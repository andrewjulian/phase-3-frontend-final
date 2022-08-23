import React from 'react'
import "../index.css"

const StudentCard = ({student}) => {
  const {name} = student
  
  return (
     <option value={name}>{name}</option>
  )
}

export default StudentCard