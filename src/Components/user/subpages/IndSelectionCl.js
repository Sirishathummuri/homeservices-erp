import { Login } from '@mui/icons-material';
import React, { Component,useState } from 'react';
import SideBar from '../SideBar';
import { Button } from '@mui/material';
export default function IndSelectionCl()
{
        const [myCar, setMyCar] = useState("Volvo");
      
        const handleChange = (event) => {
          setMyCar(event.target.value)
        }
      
        return (
            <div>
              <SideBar/>
          <form>
          <br/>
          <br/>
          <br/>
            <select value={myCar} onChange={handleChange}>
            <option style={{}} value="Select the type">Select the type</option>
              <option  value="hall">Hall</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bedrooms">Bedrooms</option>
              <option value="Bathrooms">Bathrooms</option>
              <option value="WholeHouse">WholeHouse</option>
            </select><br/>
           <br/>
           <br/>
            <select value={myCar} onChange={handleChange}>
            <option value="Select how many rooms">Select how many</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="moe than 4">More than 4</option>
            </select><br/>
            <br/>
            
            <Button href="http://localhost:3000/indcldetails" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Submit</Button>
          </form>
          </div>
        )
      
}