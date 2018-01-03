import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

const PortfolioItem = ({piece,id}) => (
  <div
    style={{backgroundColor:`gray`}}>
    {console.log(piece.file[`${piece.image}`])}
    <p>{piece.text} + {id}</p>
    {/* <Img sizes={data.file.childImageSharp}/> */}

  </div>
);

export default PortfolioItem;

export const query = graphql`

 query PortfolioImageQuery($path: String!) {
   file(relativePath: { eq: $path}){
   childImageSharp {
     sizes(maxWidth: 1500) {
       ...GatsbyImageSharpSizes
     }
    }
  }
}
`;
