import React from 'react';

const Contact = (props) => {
    const contDetail = props.getContact();

    const style = {
        backgroundColor: 'grey',
        color: 'white',
        border: '4px solid black',
        padding: '5px'
    }

    return (
        <table>
            <tr style={style}>
                <td>ID: {contDetail.id}</td>
                <td>Name: {contDetail.name}</td>
                <td>Email: {contDetail.email}</td>
                <td>Age: {contDetail.age}</td>
            </tr>
        </table>
    )
}

export default Contact;