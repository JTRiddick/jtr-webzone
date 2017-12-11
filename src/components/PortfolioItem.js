import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

const PortfolioItem = ({data,id}) => (
  <div>
    <h4>{data.title} + {id}</h4>
    {/* <Img resolutions={data.image.childImageSharp.resolutions}/> */}
    <p>{console.log(data)}</p>
    <p>{data.description}</p>
  </div>
);

export default PortfolioItem;

export const query = graphql`
  query MyFilesQuery {
   allFile {
     edges {
       node {
         image
       }
     }
   }
  }
`;
