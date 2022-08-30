import React from 'react'
import "../index.css"

const StudentCard = ({student}) => {
  const {name, id} = student
  
  return (
     <option value={id}>{name}</option>
  )
}

export default StudentCard