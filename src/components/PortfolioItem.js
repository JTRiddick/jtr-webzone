import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

const PortfolioItem = ({data,id}) => (
 
  <div>
    
    <h4>{data.title} + {id}</h4>
    {/* <Img resolutions={data.file.childImageSharp.resolutions}/> */}
    <p>{data.file.childImageSharp.resolutions}</p>
    <p>{data.description}</p>
  </div>
);

export default PortfolioItem;

export const query = graphql`
  query MyFilesQuery {
    file(relativePath: { eq: "data\\images"}){
      childImageSharp {
        resolutions(width: 125, height: 125) {
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
`;
