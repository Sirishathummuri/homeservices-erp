/* import React, { Component } from 'react';
import './Selection.css';
class SelectionPc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      rooms:[],
      colours: {}
    };
  }
  componentDidMount() {
    this.setState({
      types: [
          {id:'Select'},
     {id: 'hall', name: 'Hall'},
        {id: 'rooms', name: 'Rooms'},
        {id: 'kitchen', name: 'Kitchen'},
        {id: 'bathrooms', name: 'Bathrooms'},
        
      ]
      
    });
  }


  render () {
    const { types } = this.state;
    const {rooms}=this.state;

    let typesList = types.length > 0
    	&& types.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    let roomsList = rooms.length > 0
    && rooms.map((item, i) => {
  return (
    <option key={i} value={item.id}>{item.name}</option>
  )
}, this);

    return (
      <div className="sel">
          <h1>Select your choice</h1>
        <select>
          {typesList}
          {rooms.List}
        </select>
      </div>
    );
  }
}

export default SelectionPc; */
import { Login } from '@mui/icons-material';
import React, { Component,useState } from 'react';
import SideBar from '../SideBar';
import { Button } from '@mui/material';
export default function IndSelectionPc()
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
            
            <Button href="http://localhost:3000/indpcdetails" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Submit</Button>
          </form>
          </div>
        )
      
}