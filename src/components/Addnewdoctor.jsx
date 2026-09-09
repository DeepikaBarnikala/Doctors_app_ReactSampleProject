import {useState} from 'react';
import Home from './Home';
import axios from 'axios'



function Addnewdoctor() {
  let [name,setname]=useState('')
  let [age,setage]=useState('')
  let [gender,setgender]=useState('')
  let [specialization,setspecialization]=useState('')
  let [salary,setsalary]=useState('')
  // function handlesubmit(event){
  //   event.preventDefault()
  //   console.log(name)
  //   console.log(age)
  //   console.log(gender)
  //   console.log(specialization)
  //   console.log(salary)
 let [newdoctor,setNewdoctor]=useState(null)
async function handlesubmit(event){
    event.preventDefault()
    let formdetails={id:Date.now(),name,age,gender,specialization,salary}
    await axios.post(`https://doctorapibackend.onrender.com/doctors`,formdetails)
    alert('data posted')
    setNewdoctor(formdetails)
}
async function deletedata(id){
  await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
  alert('deleted')
  setNewdoctor(id)
}

async function updatedata(id){
  let updated={
    name:'bingo',
    specialization:'Muscles',
    age:25,
    gender:'male',
    salary:7865433

  }
  await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,updated)
  alert('data updated')
  setNewdoctor(id)
}
  
  return (
    <div className="form-container">
      <h1>Add New Doctor</h1>
      <form action='' onSubmit={handlesubmit}>
        <input type="text" value={name}onChange={(e)=>setname(e.target.value)} placeholder="Enter Doctor Name"/>
        <input type="number" value={age}onChange={(e)=>setage(e.target.value)} placeholder="Enter Age"/>
        <select name="" id="" value={gender}onChange={(e)=>setgender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" value={specialization}onChange={(e)=>setspecialization(e.target.value)} placeholder="Enter Specialization"/>
        <input type="number" value={salary}onChange={(e)=>setsalary(e.target.value)}  placeholder="Enter Salary" />
        <button type="submit">Add Doctor</button>
      </form>
      <Home updatedata={updatedata} deletedata={deletedata} newdoctor={newdoctor}/>    
    </div>
  );
}
export default Addnewdoctor;