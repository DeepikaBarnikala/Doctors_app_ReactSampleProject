import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
// import {useState} from 'react'
// import {useEffect} from 'react'
import { Route,Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
// function App() {
//   let count=0
//   return (
//     <div>
//       count is {count}
//       <button onClick={
//         ()=>{count++ 
//           console.log(count)}
//       }>add</button>
//       <Navbar/>
//       <Section/>
function App() {
  // let [count,setCount]=useState(0);
  // let [data,newData]=useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
  return (
    <div>
      {/* {data}
      <button onClick={()=>{
        let a=prompt("enter a name") 
        newData(a)}}>newdata</button>
      count is {count}
      <button onClick={
        ()=>{setCount(count+1)}
      }>add</button> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>} />
        <Route path='/addnewdoctor' element={<Addnewdoctor/>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
      </Routes>
      {/* <Section/>

      <div className='doctorcontainer'>
         <Doctorcard imglink='' name='John' gender='male' specialization='Heart specialist'/>
        <Doctorcard name='Ram' gender='male' specialization='Bones specialist'/>
        <Doctorcard name='Rishi' gender='male' specialization='Neuro specialist'/>
        <Doctorcard name='Sri' gender='male' specialization='Ortho specialist'/>
        <Doctorcard name='Diya' gender='female' specialization='Psycho specialist'/>
      </div> 
      <Addnewdoctor/> */}
      
    </div>
  )
}

export default App