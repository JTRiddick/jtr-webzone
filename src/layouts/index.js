import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import FontAwesome from 'react-fontawesome';

import './index.css';
import '../assets/scss/style.scss';


const Header = () => (
  <header className="superheader super-fill centered vaporwave-road">
    <div className='container'>
      <h1>Jordan Taylor Riddick</h1>
    </div>
    <div className="container">
      <h2>UI/UX . Front-End Dev</h2>
      <p><i>How's it going?</i></p>
      <p><span>You don't have to answer.</span></p>
    </div>
    <div className="container">

      <a href="#who">
          {/* <i className="fa fa-chevron-circle-down fa-5x"></i> */}
          <FontAwesome name='chevron-circle-down'
            size='10x'
          />
      </a>

    </div>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="JTRiddick"
      meta={[
        { name: 'description', content: 'Jordan Taylor Riddick, developer designer' },
        { name: 'keywords', content: 'Riddick, developer, designer, javascript, react, node' },
      ]}
    />
    <Header />
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
      <p>&copy; 2018 Jordan Taylor Riddick.</p>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
