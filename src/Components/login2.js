import React from "react"
import {useState} from 'react'
import './register2.css'
import { Button } from '@material-ui/core';
export default function login2()
{
    
    return(
        <div className="hero-image">
        <div className="hero-text">
<h1> Welcome to PC^2 services  </h1>
        <div class="container" >
    <div class="row">
    <div class="col-md-3">
          
    </div>
        
    <div class="col-md- main">
          
    <form>
        <h1 style={{color:'white'}}> Sign In!!!!!</h1>
              
                            
                                            
                            <input class="box" type="email" name="email" id="email"
                            placeholder="E-Mail " required /><br/>
                                            
                            <input class="box" type="password" name="password"
                            id="password" placeholder="Password " required/><br/>
                                            
                            

                                            <Button href="http://localhost:3000/sidebar" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Login </Button>
<br/>
<p style={{color:"white"}}> New User? <a href="http://localhost:3000/register" style={{color:'aqua'}}><u>Register Here</u></a></p>
<p style={{color:"white"}}> Login? <a href="http://localhost:3000/appadmin" style={{color:'aqua'}}><u>Login as Admin</u></a></p>
                                      
                           
            </form>  
          
    </div>
        
        
    <div class="col-md-3">
    </div>
        
  </div>
  </div>


</div>
</div>
)
}