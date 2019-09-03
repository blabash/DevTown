import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page Not Found
      </h1>
      <p className='large'>How did you get here?</p>
    </Fragment>
  );
};

export default NotFound;
