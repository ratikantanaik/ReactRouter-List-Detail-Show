import React from 'react';

// Erorr message will only work in production server. It will still show the error in dev
class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError : false,
            errMsg : ''
        }
    }

    componentDidCatch(error, info){
        console.dir(error);
        this.setState({hasError: true, errMsg: error});
    }

    render(){

        if(this.state.hasError){
            return <h1> {this.state.errMsg}</h1>;
        }
        else{
            this.props.children;
        }
    }
}

export default ErrorBoundary;