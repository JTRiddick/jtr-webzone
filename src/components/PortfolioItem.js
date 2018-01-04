import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

const PortfolioItem = ({piece,src,data}) => (
  <div
    style={{backgroundColor:`gray`}}>
    <p>{piece.text} + {piece.id}</p>
    {/* <Img sizes={data.file.childImageSharp}/> */}

  </div>
);

export default PortfolioItem;
