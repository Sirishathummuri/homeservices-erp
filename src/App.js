import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Link,Switch,Route} from 'react-router-dom';
import Login2 from './Components/login2'
import Register2 from './Components/Register2';
import SideBar from './Components/user/SideBar';
import Overview from './Components/user/pages/Overview';
import Services from './Components/user/pages/Services';
import Cooking from './Components/user/subpages/Cooking';
import Cleaning from './Components/user/subpages/Cleaning';
import PestControl from './Components/user/subpages/PestControl';
import Selection from './Components/user/subpages/Selection';
import Details from './Components/user/subpages/Details';
import FAQ from './Components/user/pages/FAQ';
import Support from './Components/user/pages/Support';
import TermCond from './Components/user/pages/TermsCond';
import PizzaDetails from './Components/user/subpages/PizzaDetails';
import BiryaniDetails from './Components/user/subpages/BiryaniDetails';
import VegthaliDetails from './Components/user/subpages/VegthaliDetails';
import NonvegthaliDetails from './Components/user/subpages/NonvegthaliDetails';
import SweetsDetails from './Components/user/subpages/SweetsDetails';
import NoodlesDetails from './Components/user/subpages/NoodlesDetails';
import { North } from '@mui/icons-material';
import NorthindianDetails from './Components/user/subpages/NorthindianDetails';
import AllFoodsDetails from './Components/user/subpages/AllFoodsDetails';
import login2 from './Components/login2';
import Profile from './Components/user/pages/Profile';
import IndSelectionPc from './Components/user/subpages/IndSelectionPc';
import IndpcDetails from './Components/user/subpages/IndpcDetails';
import IndCleaningDetails from './Components/user/subpages/IndCleaningDetails';
import IndSelectionCl from './Components/user/subpages/IndSelectionCl';
import Login3 from './Components/Login3';

import Overview2 from './Components/user/pages/Overview2';




function App() {
  return (
    
    <div className="App">
     <div>
    
     <div class="container">
  
</div>
     <Router>
       <div  /* class="topnav" id="myTopnav" */>
             {/* <ul>
              <li>
                <Link to="/login">
            <li>Login</li>
            </Link>
            </li>
            </ul> 
            </div>
            <div> */}
            
            <switch>
  
            <Route exact path='/' component={Login3}></Route>
  <Route exact path='/register' component={Register2}></Route>
  <Route exact path='/sidebar' component={SideBar}></Route>
  <Route exact path='/Overview' component={Overview}></Route>
  <Route exact path='/services' component={Services}></Route>
  <Route exact path='/cooking' component={Cooking}></Route>
  <Route exact path='/cleaning' component={Cleaning}></Route>
  <Route exact path='/pestcontrol' component={PestControl}></Route>
  <Route exact path='/selection' component={Selection}></Route>
  <Route exact path='/details' component={Details}></Route>
  <Route exact path='/sidebar/faq' component={FAQ}></Route>
  <Route exact path='/support' component={Support}></Route>
  <Route exact path='/terms' component={TermCond}></Route>
  <Route exact path='/pizzadetails' component={PizzaDetails}></Route>
  <Route exact path='/biryanidetails' component={BiryaniDetails}></Route>
  <Route exact path='/vegthalidetails' component={VegthaliDetails}></Route>
  <Route exact path='/nonvegthalidetails' component={NonvegthaliDetails}></Route>
  <Route exact path='/sweetsdetails' component={SweetsDetails}></Route>
  <Route exact path='/noodlesdetails' component={NoodlesDetails}></Route>
  <Route exact path='/northindiandetails' component={NorthindianDetails}></Route>
  <Route exact path='/allfoodsdetails' component={AllFoodsDetails}></Route>
  <Route exact path='/profile' component={Profile}></Route>
  <Route exact path='/indselectionpc' component={IndSelectionPc}></Route>
  <Route exact path='/indpcdetails' component={IndpcDetails}></Route>
  <Route exact path='/indcldetails' component={IndCleaningDetails}></Route>
  <Route exact path='/indselectioncl' component={IndSelectionCl}></Route>
  {/* <Route exact path='/overview' component={Overview}></Route> */}
  
  <Route exact path='/overview' component={Overview2}></Route>
  
</switch>

</div>
</Router>
          
        </div> 
      
        
    </div>
  );
}

export default App;
