import React from 'react'

const home = ({handleDeleteAssignment}) => {
  
  function handleDeleteTargetClick() {
    console.log("deleted")
    fetch(`http://localhost:9292/assignments`, {
      method: "DELETE",
    });

    handleDeleteAssignment(11);
  }

  return (
    <div>
      Home
      <button onClick={handleDeleteTargetClick}>CLICKME</button>

    </div>
  )
}

export default home