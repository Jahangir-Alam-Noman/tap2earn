import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';
// import useDocumentTitle from '../components/document-title';

function GuestRoute ({ component: Component, title, showPanel = false,  ...rest }) {
  // useDocumentTitle(title);

  let { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={props => authenticated
        ? <Redirect to={{ pathname: '/user-dashboard/index', state: { from: props.location } }} />
        : <Component {...props} showPanel={showPanel} />
      }
    />
  );
};






GuestRoute.displayName = 'Guest Route';

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string
};


export default GuestRoute;
