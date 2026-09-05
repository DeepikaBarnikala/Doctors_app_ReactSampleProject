import React from 'react'

// function Doctorcard(props) {
//   return (
//     <div>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBMWvfq0RZ8PqUt1VDKKXJBNMz8OucLHlDlbrc1xEtw&s=10" alt="" />
//       <h1>{props.name}</h1>
//       <p>{props.gender}</p>
//       <p>{props.specialization}</p>
//       <button>View details</button>
//     </div>
//   )
// }

//destructuring
function Doctorcard({name,gender,specialization}) {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBMWvfq0RZ8PqUt1VDKKXJBNMz8OucLHlDlbrc1xEtw&s=10" alt="" />
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>{specialization}</p>
      <button>View details</button>
    </div>
  )
}

export default Doctorcard