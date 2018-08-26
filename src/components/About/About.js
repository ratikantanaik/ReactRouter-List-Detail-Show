import React from 'react';

const About = (props) => {
    return (
    <div>
        <h2>This is About page.</h2>
        { props.children }
    </div>
    )
}

export default About;