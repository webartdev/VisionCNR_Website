import React, { Component } from 'react';
import '../../src/App.css';
import { Switch, Route } from 'react-router-dom';
// import Table from './Table';
import Header from '../components/Header';
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import Edit from '../components/Edit';
import Links from '../components/Links';
import Appointments from '../components/Appointments';
// import '../components/Help.html';
import PageNotFound from '../components/PageNotFound';
import {Provider} from 'react-redux';
//import { applyMiddleware } from '../../../../Library/Caches/typescript/3.1/node_modules/redux';
import store from '../playground/redux-store';

//const store = createStore(() => [], {}, applyMiddleware());

class AppRouter extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/links' component={Links} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/appointments' component={Appointments} />
                    <Route path='/edit/:id' component={Edit} />
                    {/* <Route path='/edit' component={Edit} /> */}
                    <Route exact path='/testimonials' component={Testimonials} />
                    <Route component={PageNotFound} />
                </Switch>
                <div>
                    {/* <Table /> */}
                   
                    
                </div>
            </div>
            </Provider>
        );
    }
}

export default AppRouter;