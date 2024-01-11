import React, { useState } from 'react'
import CreateRequest from './CreateRequest';




const Request = () => {
    const [data, setData] = useState({
      firstName: "",
      phoneNumber: "",
      repairDate:"",
      repairType:"",
      stateRegion :"",
      address:"",
      country:"",
      numberAC:"",
      comment:"",
    });

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const handleChange = e => {
        setData()
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <CreateRequest data={data} handleChange={handleChange} />
            
       
      
        </form>
    );
}

export default Request
