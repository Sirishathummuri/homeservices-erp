import React ,{useState} from 'react'
import {Grid,Paper,Avatar,Typography,TextField} from '@material-ui/core'
import { Button } from '@material-ui/core';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Register=()=>
{
  const [user,setUser]=useState({
    name:"",email:"",gender:"",PhoneNumber:"",Password:"",ConfirmPassword:""});
    const handleInputs=(e)=>
    {
      console.log(e);
    }

    const paperStyle={padding:'30px 20px',width:300, height:500,margin:' 100px 800px '}
    const headerStyle={margin:0}
    return (
        <Grid className="hero-image">
          <Grid className="hero-text">
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>

                     
              <Avatar style={{backgroundColor:'chocolate'}}>
              <PersonAddSharpIcon/>
                  </Avatar>

                  <h2 style={headerStyle}>Sign Up</h2>
                  <Typography variant='caption'>Please fill this form to create an account..!</Typography>

              </Grid>
              <form method='POST'>
<TextField   fullWidth label ='Name' name="name" id="name" placeholder="Enter your name" autoComplete="off" 
/>

<TextField fullWidth label = 'Email' name="email" id="email"  placeholder="Enter your Email" autoComplete="off"
/>
<FormControl component="fieldset" align='left'>
  <FormLabel component="legend" style={{marginTop:5,textAlign:'left'}}>Gender</FormLabel>
  <RadioGroup aria-label="gender" style={{textAlign:'left', display:'initial'}} name="gender" id="gender" autoComplete="off"  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
   
  </RadioGroup>
</FormControl>
<TextField fullWidth label ='PhoneNumber' name="PhoneNumber" id="PhoneNumber" placeholder="Enter your Phonenumber" autoComplete="off"/>
<TextField fullWidth label = 'Password' name="Password" id="Password"   type="password" placeholder="Enter your password" autoComplete="off"/>
<TextField fullWidth label = 'ConfirmPassword' name="ConfirmPassword" type="password" placeholder="Confirm your password" autoComplete="off"/> <br/>
<FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label=" I accept the Terms and Conditions"
      /> <br/>
<Button href="http://localhost:3000" type = 'submit' variant = 'contained' color = 'primary' style={{marginTop:5,textAlign:'left'}}>Sign Up </Button>
</form>
          </Paper>
          </Grid>
        </Grid>
    )
}
export default Register;