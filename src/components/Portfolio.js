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
    console.log('portfolio component props @ render: ', this.props);
    return (
      <div>
        <h2>Important Works</h2>
        <div
          style={{
            margin: `0 auto`,
            border: `2px solid rgba(227, 227, 227, 1)`,
            marginBottom: `6px`,
            paddingBottom:`7px`,
          }}
          className="portfolio-list">
          {this.props.items.map(piece => {
            return (<div key={piece.id}>
              {piece.title} + {piece.id}
              <div className={`${piece.background } portfolio-item`}
                style={{
                  padding:`2px`,
                  height:`300px`,
                  width:`300px,`
                }}></div>
              <p>{piece.text}</p>
            </div>)
          })}

        </div>
      </div>
    )
  }
}

export default Portfolio;
