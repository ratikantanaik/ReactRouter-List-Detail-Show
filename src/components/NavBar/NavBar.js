import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    render(){

        const activeStyle = {
            backgroundColor: 'red',
            color: 'white'
        }

        return(<ul>
                <li><NavLink activeStyle={activeStyle} to='/about'>About</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to='/home'>Home</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to='/contacts'>Contacts</NavLink></li>
            </ul>)
    }
}

export default NavBar;