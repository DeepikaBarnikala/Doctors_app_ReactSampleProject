import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
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
function Doctorcard({name,gender,specialization,id,deletedata}) {
  let navigate=useNavigate()
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBMWvfq0RZ8PqUt1VDKKXJBNMz8OucLHlDlbrc1xEtw&s=10" alt="" />
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>{specialization}</p>
      <button onClick={()=>navigate(`/doctordetails/${id}`)}>View details</button>
      <button onClick={()=>deletedata(id)}>Delete Doctor</button>
      <button onClick={()=>updateedata(id)}>UpdateDoctor</button>
    </div>
  )
}

export default Doctorcard