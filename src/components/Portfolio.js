import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../assets/scss/style.scss';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h2>Important Works</h2>
        <div
          style={{
            margin: `0 auto`,
            border: `2px solid rgba(227, 227, 227, 1)`,
            marginBottom: `6px`,
            paddingBottom:`7px`,
          }}>

        </div>
      </div>
    )
  }
}

export default Portfolio;
