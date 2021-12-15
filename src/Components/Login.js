import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField} from '@material-ui/core'
import { Button } from '@material-ui/core';
import './login.css'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const Login=()=>
{

    const paperStyle={padding:'30px 20px',width:300, height:300,margin:' 100px 800px '}
    const headerStyle={margin:0}
    return (
        <div className="hero-image">
            <div className="hero-text">
            {/* <div className="background"> */}
        <div>
            <h1> WELCOME TO PC^2 SERVICES....<br/> LOGIN OR REGISTER TO AVAIL OUR SERVICES </h1>
            <div className="login">
                
        <Grid align='right'>
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>

                     
              <Avatar style={{backgroundColor:'chocolate'}}>
              <LockOpenOutlinedIcon/>
                  </Avatar>

                  <h2 style={headerStyle}>Sign In</h2>
                  <Typography variant='caption'>Please fill this form to login to your account ..!</Typography>

              </Grid>
              <form>

<TextField fullWidth label = 'Email' id="email" placeholder="Enter your Email"/>
<TextField fullWidth label = 'Password' id="password" type="password" placeholder="Enter your password"/>
<Button href="http://localhost:3000/sidebar" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Login </Button>
<br/>
<p style={{color:"white"}}> New User? <a href="http://localhost:3000/register" style={{color:'aqua'}}><u>Register Here</u></a></p>

</form>
          </Paper>
        
        </Grid>
        
        </div>
        </div>
        </div>
        </div>
       /*  </div> */
        
    )
}
export default Login;