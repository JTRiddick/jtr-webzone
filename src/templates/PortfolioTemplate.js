import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import '../assets/scss/style.scss';

export default function PortfolioTemplate({
  data
}) {
  const { imageSharp } = data;
  return (
    <div>
      <p>{imageSharp}</p>
      {/* <h4>{data.title} + {id}</h4> */}
      {/* <Img resolutions={data.file.childImageSharp.resolutions}/> */}
      {/* <p>{data.description}</p> */}
    </div>
  )
}


export const query = graphql`
 query ImageInsertQuery {
   imageSharp(id: { regex: "/images/" }) {
     sizes(maxWidth: 1500) {
       ...GatsbyImageSharpSizes
      }
    }
  }
`;
