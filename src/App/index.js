import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Nav, NavItem, NavLink } from 'reactstrap';

import Cars from '../pages/Car';
import Country from '../pages/Country';
import Home from '../pages/Home';
import Instrument from '../pages/Instrument';
import Quote from '../pages/Quote';

export default function BasicExample() {
    return (
        <Router>
            <>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/cars">Cars</NavLink>
               </NavItem>
               <NavItem>
                    <NavLink tag={Link} to="/countries">Countries</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/instruments">Instruments</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/quotes">Quotes</NavLink>
                </NavItem>
            </Nav>
            
            <hr />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cars" component={Cars}/>
                <Route path="/countries" component={Country}/>
                <Route path="/instruments" component={Instrument}/>
                <Route path="/quotes" component={Quote}/>
            </Switch>

        </>
    </Router>
    );
}
