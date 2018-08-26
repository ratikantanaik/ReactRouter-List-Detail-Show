import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import { Home, About, NotFound, ContactList } from '../';
import Contact from '../Contact/Contact';
import ErrorProne from '../ErrorProne/ErrorProne';
import ErrorBoundary from '../\/ErrorBoundary';

class Container extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact render={ () => {
                        return (
                            <About>
                                <h3>Know About: </h3>
                                <hr></hr>
                                <ul>
                                    <ol>Company Name</ol>
                                    <ol>Company Address</ol>
                                    <ol>Company Aim</ol>
                                    <ol>Company Branches</ol>
                                </ul>
                            </About>
                        )
                    } } />                    
                    <Route path='/contacts' exact component={ContactList} />
                    <Route path='/contact:id' exact component={Contact} />
                    <Route path='/testLuck' render={() => {
                        return(
                            // <ErrorBoundary>
                                <ErrorProne></ErrorProne>
                            // </ErrorBoundary>
                        )
                    }} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Container;