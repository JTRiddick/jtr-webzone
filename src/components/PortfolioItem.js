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
  <li
    className={`portfolio-item`}
    style={{backgroundColor:`gray`}}>
    <h4><span>{item.title}</span></h4>

    <a>
      <Img resolutions={resolutions} className={'thumbnail'}/>
    </a>

    <p className={`portfolio-content`}>{`${item.text}`}</p>
  </li>
)};

export default PortfolioItem;
