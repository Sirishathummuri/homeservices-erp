import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./appadmin.css";
import Home from "./Home"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import User from "./User";
import NewUser from "./NewUser";
import ProductList from "./ProductList";
import Product from "./Product";
import NewProduct from "./NewProduct";
import Logout from "./Logout";
import Service_providers from "./Service_providers";
import Cooking_Service_providers from "./Cooking_Service_providers";
import Pestcontrol_Service_providers from "./Pestcontrol_Service_providers";

function appadmin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/appadmin">
            <Home />
          </Route >
          <Route exact path="/home">
            <Home />
          </Route >
         <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/serviceproviders">
            <Service_providers/>
          </Route>
          <Route path="/cookingserviceproviders">
            <Cooking_Service_providers/>
          </Route>
          <Route path="/pestserviceproviders">
            <Pestcontrol_Service_providers/>
          </Route>
         
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default appadmin;