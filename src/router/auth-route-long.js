import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { setIntendedUrl } from '../utils/auth';
// import AuthNav from '../components/auth-nav';
// import Footer from '../components/footer';
// import useDocumentTitle from '../components/document-title';

function AuthRouteLong ({ component: Component, title, ...rest }) {
  // useDocumentTitle(title);
  let {authenticated} = useAuth();
  let { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        if (!authenticated) {
          console.log(`props.location.pathname`, props.location.pathname)
          setIntendedUrl(props.location.pathname);
        }

        return authenticated
          ? (
            <div>
              {/* <AuthNav /> */}
              {/* <div className="flex flex-1 home-wigwag overlay-w-100 container-fluid"> */}
                {/* <p>HI</p> */}
                <Component {...props} />
              {/* </div> */}
              {/* <Footer /> */}
            </div>
          )
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }
      }
    />
  );
};

AuthRouteLong.displayName = 'Auth Route';

AuthRouteLong.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string
};

export default AuthRouteLong;
