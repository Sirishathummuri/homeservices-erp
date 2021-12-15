/* import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> <b>New Join Members</b></span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.mpL5Il_ESXPk3dhXpPDO3gHaMR&pid=Api&P=0&w=300&h=300" width="200"  height="200"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">lakshmi</span> <br></br>
            <span className="widgetSmUserTitle">Doctor</span>

            <br></br>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/photos/one-confident-attractive-indian-businesswoman-stock-image-picture-id1029826858?k=6&m=1029826858&s=612x612&w=0&h=4R1kJ8PrgRXNlPi_EYooNy6NnjmEAA5FmLlJxqOStkM=" width="200"  height="200"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ravindra</span> <br></br>
            <span className="widgetSmUserTitle">house wife</span>
          </div>
         
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://thumbs.dreamstime.com/z/happy-indian-student-smiling-books-28690062.jpg" width="200"  height="200"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Keerthana</span> <br></br>
            <span className="widgetSmUserTitle">Student</span>
          </div>
         
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.WKFvs4hAYEas3NBZT8_42wHaLH&pid=Api&P=0&w=300&h=300" width="200"  height="200"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teja</span> <br></br>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg" width="200"  height="200"
            alt="" 
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sirisha</span> <br></br>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          
        </li>
      </ul>
    </div>
  );
} */

import { imageListClasses } from '@mui/material'
import React from 'react'
import './widgetSm.css'
export default function WidgetSm()
{
    
      
   return (
       <div>
<h1 style={{fontFamily:'italic',color:'red'}}>New Users</h1>
      
   <div class="topnav" id="myTopnav">
       
       <div class="responsive">
  <div class="gallery">
    
      <img src="https://tse3.mm.bing.net/th?id=OIP.WKFvs4hAYEas3NBZT8_42wHaLH&pid=Api&P=0&w=300&h=300" alt="" width="600" height="500"/>
    
    <div class="desc" style={{color:'black'}}>Teju<br/>
  </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src="https://tse2.mm.bing.net/th?id=OIP.mpL5Il_ESXPk3dhXpPDO3gHaMR&pid=Api&P=0&w=300&h=300" alt="PIZZA" width="600" height="400"/>
    
    <div class="desc" style={{color:'black'}}>Siri<br/>
  </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src="https://www.bing.com/th?id=OIP.-3x3lx-HSd2jw-dlul_JwAHaL-&w=126&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="600" height="400"/>

    <div class="desc" style={{color:'black'}}>keerthana<br/>
  </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src="https://www.bing.com/th?id=OIP.HUHJAD3gp-uIZ31USppwUwHaLI&w=68&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="600" height="500"/>
    
    <div class="desc" style={{color:'black'}}>Sirisha<br/>
  </div>
  </div>
</div>

</div>
</div>        
   )
      
}