import React, { useEffect, useState } from 'react'
import './SearchByPin.css'
import axios from 'axios'
function SearchByPin() {

    const [pincode, setpincode] = useState()
    const [slots, setslots] = useState([])

    var today = new Date(),

    date =  today.getDate()+ '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    const getApi =()=>{

        if (pincode.length!=6) {
            alert("Invalid Pincode")
        }
        

      
        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`).then((Response)=>{
        console.log(Response.data.sessions)
        setslots(Response.data.sessions)

        if ((Response.data.sessions)=="") {
            alert("No Slots found")
        }
    })

    }

    


    return (
        <div className="SearchByPin">
                <h1>Find Vaccination Center Based on Pincode</h1>
                
            <div className="search-section">
                <input type="number" minLength="6" onChange={((e)=>setpincode(e.target.value))} name="pin" id="pin" className="pin" placeholder="Enter your Pincode" />
                <button  className="Search" onClick={getApi}>Search</button>
            </div> 

            <div className="result-section">

                {slots.map((obj)=>{

                   return(  <div className="ResultBox">
                     <div ><h2>{obj.name}</h2></div>
                     <hr />
                     <div className="row">Date: {obj.date}</div>
                     <div className="row"> Address:  {obj.address}, {obj.block_name}, {obj.district_name}</div>
                     <div className="row">From : {obj.from}   To : {obj.to} </div>
                     <div className="row">Available doss 1: {obj.available_capacity_dose1}</div>
                     <div className="row">Available doss 2: {obj.available_capacity_dose2}</div>
                     <div className="row">Minimum Age : {obj.min_age_limit}</div>
                     <div className="row">Price: Free</div>
                     <div className="row" >{obj.vaccine}</div>
                 </div>)

                })}
                
           
           

            </div>

        </div>
    )
}

export default SearchByPin
