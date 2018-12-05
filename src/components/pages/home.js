import React, {Component} from 'react';
import NavBar from '../Navbar.js'
import JumboTron from '../Jumbotron.js';

class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <JumboTron Fluid/>
            </div>
        );
    }
}

export default Home;