import React from 'react';

class ErrorProne extends React.Component {

    render(){
        const val = Math.random() * (50 - 1) + 1;

        if(val > 30)
            return <h2>You passed the exam with more than {val} out of 50</h2>;
        else
            throw new Error('You failed with score ' + val);
    }
}

export default ErrorProne;