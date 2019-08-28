import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import '../assets/scss/style.scss';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="NTRiddick"
      meta={[
        { name: 'description', content: 'Nadezdha Taylor Riddick, developer designer' },
        { name: 'keywords', content: 'Riddick, developer, designer, javascript, react, node' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 2356,
        width: 100+'%',
        position: 'relative',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <footer>
      <p>&copy; 2019 Nadezdha Taylor Riddick.</p>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
