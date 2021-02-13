import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ErrorPage from './ErrorPage';
import ComponentC from './ComponentC';
import ShowURLParams from './ShowURLParams';
import ShowURLParamsUsingUseParams from './ShowURLParamsUsingUseParams';
import Search from './Search';

function RouterDemo() {
    return (
        <>
            <h3 className="text-center">Home Component</h3>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Using Link tag</h4>
                        <div>
                            <Link to="/a" className="btn btn-success">ComponentA</Link>
                            <Link to="/b" className="btn btn-warning">ComponentB</Link>
                            <Link to="/search" className="btn btn-primary">Search Page</Link>
                            <Link to="/" className="btn btn-primary">Back to HomePage</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Using Nav Link instead of Link</h4>
                        <div>
                            <NavLink to="/a" exact activeClassName="btn btn-success">ComponentA</NavLink>

                            <NavLink to="/b" exact activeClassName="btn btn-warning">ComponentB</NavLink>

                            <NavLink to="/c" exact activeClassName="btn btn-danger">Component C</NavLink>
                            <NavLink to="/d" exact activeClassName="btn btn-info">Component C using Render</NavLink>
                            <br />
                            <NavLink to="/e/kamal/papnai" exact activeClassName="btn btn-primary">Displaying Params in component using normal match way</NavLink>
                            <br />
                            <NavLink to="/f/Kamal/Papnai" exact activeClassName="btn btn-success">Displaying Params in component using useParams way</NavLink>
                            <br />
                        </div>
                    </div>
                </div>


            <br />
            <br />

            <div className="row">
                <h5 className="text-center">Component Rendering:</h5>
                <br/>
                <div className="col-md-9 mx-auto">
                <Switch>
                    <Route exact path="/" />
                    <Route path="/a" component={ComponentA} />
                    <Route path="/b" component={ComponentB} />
                    <Route path="/c" component={() => {
                        return <ComponentC name="Kamal Papnai" />
                    }} />
                    <Route path="/d" render={() => {
                        return <ComponentC name="Kamal Papnai Render" />
                    }} />

                    <Route path="/e/:fname/:lname" component={ShowURLParams} />

                    <Route path="/f/:fname/:lname" component={ShowURLParamsUsingUseParams} />

                    <Route path="/search" component={Search} />

                    <Route component={ErrorPage} />

                    {/* <Redirect to="/a"/> */}

                </Switch>
                </div>
            </div>
            </div>
        </>
    )
}

export default RouterDemo