import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Doctordetails() {
    let {id}=useParams()
    let [doctors,setDoctors]=useState()

    async function getapidata(){
    let response=await axios.get("https://doctorapibackend.onrender.com/doctors") 
    let finaldata=response.data.find((val)=>id==val.id)
    setDoctors(finaldata);
    }

    useEffect(()=>
    {
        getapidata()
    },[])

  return (
    <div>
        {doctors && (
            <div> 
        <h1>{doctors.id}</h1>
        <h1>{doctors.name}</h1>
        <h1>{doctors.gender}</h1>
        <h1>{doctors.salary}</h1>
            </div>
        )}
    </div>
    
  )

}
export default Doctordetails