import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PortfolioItem from './PortfolioItem'


import '../assets/scss/style.scss';

const Portfolio = ({data}) => {

  return (
    <div>
      {console.log(data.AllImagesQuery)}
      <h2>Important Works</h2>
      <div
        style={{
          margin: `0 auto`,
          border: `2px solid rgba(227, 227, 227, 1)`,
          marginBottom: `6px`,
          paddingBottom:`7px`,
        }}
        className="portfolio-list">
        {data.map(piece => {
          return (<div key={piece.set}>
            <PortfolioItem piece={data[`${piece.set-1}`]}
               src={piece.image}
               className={`portfolio-item`}
            />
          </div>)
        })}

      </div>
    </div>
  )

}

export default Portfolio;

export const pageQuery = graphql`
  query AllImagesQuery {
    allImageSharp {
      edges {
        node {
          id
          resolutions{
           base64
           tracedSVG
           aspectRatio
           width
           height
           src
           srcSet
           srcWebp
           srcSetWebp
           originalName
          }
        }
      }
    }
  }
`;
