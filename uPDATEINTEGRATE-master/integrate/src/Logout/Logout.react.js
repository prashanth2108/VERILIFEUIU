import React from 'react';
// import {Link,Route,Redirect,Router} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Redirect,NavLink,withRouter } from "react-router-dom";
import './Logout.css';

import $ from 'jquery'; 
import Home from '../Home/Home.react';
import Login from '../Login/Login.react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state={loaded:false};

    }
    

    validate=(event) =>
    {
        event.preventDefault();

            console.log("Hi")
            $("#dropdownMenuButton").show();
            $("#logoutbtn").hide();
            console.log(this.state.loaded)
            this.setState({loaded:true});
    }
    
    render()
     {
         console.log(this.state.loaded)
        if(!this.state.loaded)
        {
        return (
            <div className='logout_wrapper'>
<button type="button" class="btn btn-primary" id='logoutbtn' style={{display:"none"}} onClick={this.validate}>Logout</button>
            </div>
        );
    }
    else
{console.log("Invoke Redirect");
return(
        <Router>
            <Redirect to="/donorLogin/"/>
            <Route path="/donorLogin/" component={Home} />
        </Router>
        
);
}
}

}

export default Logout;