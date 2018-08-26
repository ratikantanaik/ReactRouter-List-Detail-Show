import React from 'react';
import Contact from '../Contact/Contact';
import Radium from 'radium';

class ContactList extends React.Component{
    constructor(){
        super();
        this.state = {
            contacts : [],
            showContactId: null
        }
    }

    getContact = () => {
        const cont = this.state.contacts.filter((contact) => {
            return (contact.id == this.state.showContactId);
        });
        if(cont.length > 0)
            return cont[0];
        else
            return null;
    }

    showContact = (event) => {
        this.setState({showContactId: event.target.value});
    }

    componentWillMount(){
        this.setState({contacts : [
            {
                id: 112,
                name: 'R Naik',
                email: 'ratikanta.naik@gmail.com',
                age: 34
            },
            {
                id: 113,
                name: 'JP Mallick',
                email: 'mallick@gmail.com',
                age: 32
            },
            {
                id: 114,
                name: 'Sonu Mallick',
                email: 'sonu@gmail.com',
                age: 28
            }
        ]})
    }

    

    render(){
        const btnStyle = {
            backgroundColor: 'green',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer',
            color: 'white',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        const trStyle = {
            backgroundColor: 'yellow',
            border: '2px solid blue',
            padding: '8px'
        }

        const contacts = this.state.contacts.map((cont) => {
            return(
                <tr style={trStyle}>
                    <td><button key={cont.name} style={btnStyle} onClick={this.showContact} value={cont.id} >{cont.id}</button> </td>
                    <td>{cont.name}</td>
                    <td>{cont.email}</td>
                    <td>{cont.age}</td>
                </tr>
            )
        })
        return(
            <div>
                <table style={{border:1}}>
                    {contacts}       
                </table>
                <hr></hr>
                { this.state.showContactId? <Contact getContact={this.getContact}/> : null }
            </div>
        )
    }
}

export default Radium(ContactList);