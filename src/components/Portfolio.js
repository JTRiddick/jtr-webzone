import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PortfolioItem from './PortfolioItem'


import '../assets/scss/style.scss';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log('component did mount ', this);

  }

  render(){
    const works = this.props.works;
    const images = this.props.images;
    works.map(piece => {
      let img = {};
      images.map((image, i) => {
        // console.log('image map ', image, i, piece);
        if (image.node.resolutions.originalName === piece.node.image){
          img = image.node
          Object.assign(piece.node,img)
        }
      })

      return works
    })

    // console.log('portfolio component props @ render: ', this.props);
    // console.log('works object :', works )
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
          {works.map(piece => {
            console.log('piece is ', piece.node);
            return (<div key={piece.node.set}>
              <PortfolioItem piece={works[`${piece.node.set-1}`]}/>
            </div>)
          })}

        </div>
      </div>
    )
  }
}

export default Portfolio;
