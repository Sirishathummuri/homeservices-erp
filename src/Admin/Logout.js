import React from 'react'
import { Button } from '@material-ui/core'
export default function Logout()
{
    return(
        <div>
            <h1 style={{fontWeight:'bolder',color:'black'}}>Are you sure want to logout??</h1> 
            
            <Button href="http://localhost:3000" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>YES </Button>
            <Button href="http://localhost:3000/appadmin" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>NO </Button>
        </div>
    )
}