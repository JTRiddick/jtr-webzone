import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

const PortfolioItem = ({piece}) => {
  console.log('PortfolioItem ',piece, piece.node);
  const item = piece.node;
  const resolutions = item.resolutions;
  return(
  <div
    style={{backgroundColor:`gray`}}>
    <h3>{item.title}</h3>
    <Img resolutions={resolutions}/>
    <p>{`${item.set} ${item.text}`}</p>
  </div>
)};

export default PortfolioItem;
