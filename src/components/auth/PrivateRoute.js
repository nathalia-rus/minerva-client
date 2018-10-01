import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * https://tylermcginnis.com/react-router-protected-routes-authentication/
 */

const PrivateRoute = ({component: Component, display, redirect, ...rest}) => (
    <Route {...rest} render={props => {
        return display
            ? <Component {...props} />
            : <Redirect to={redirect} />
    }
    } />
)

PrivateRoute.defaultProps = {
    display: true,
    redirect: '/',
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
