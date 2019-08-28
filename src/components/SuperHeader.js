import React from 'react';
import FontAwesome from 'react-fontawesome';

const SuperHeader = (props) => (
  <header className="superheader super-fill centered vaporwave-road">
    <div className='container'>
      <h1>Nadya Taylor Riddick</h1>
    </div>
    <div className="container">
      <h2>UI/UX . Front-End Dev</h2>
      <p><i>How's it going?</i></p>
      <p><span>You don't have to answer.</span></p>
    </div>
    <div className="container">

      <a href="#who">
          {/* <i className="fa fa-chevron-circle-down fa-5x"></i> */}
          <FontAwesome name='chevron-circle-down'
            size='5x'
          />
      </a>

    </div>
  </header>
)

export default SuperHeader;
