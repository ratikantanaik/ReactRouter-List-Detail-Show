import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(<ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>)
    }
}

export default NavBar;