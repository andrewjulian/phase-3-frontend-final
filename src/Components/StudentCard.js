import React from 'react'

const StudentCard = ({student}) => {
  const {name} = student
  
  return (
    <div>{name}</div>
  )
}

export default StudentCard