import React from 'react';

const Contact = (props) => {
    const contDetail = props.getContact();
    console.dir(contDetail);

    return (
        <table>
            <tr>
                <td>ID: {contDetail.id}</td>
                <td>Name: {contDetail.name}</td>
                <td>Email: {contDetail.email}</td>
                <td>Age: {contDetail.age}</td>
            </tr>
        </table>
    )
}

export default Contact;