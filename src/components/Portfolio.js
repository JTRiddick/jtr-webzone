import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PortfolioItem from './PortfolioItem'

import '../assets/scss/style.scss';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let data = this.props.data
    console.log('graphql? ',{...data.edges})
  }

  render(){
    console.log('portfolio component props @ render: ', this.props);
    return (
      <div>
        <h2>Important Works</h2>
        <div
          style={{
            margin: `0 auto`,
            border: `2px solid rgba(227, 227, 227, 1)`,
            marginBottom: `6px`,
            paddingBottom:`7px`,
          }}
          className="portfolio-list">
          {this.props.data.map(piece => {
            return (<div key={piece.set}>
              {piece.title} + {piece.set}
              <PortfolioItem data={this.props.data} id={piece.set} className={`portfolio-item`} />
              <p>{piece.text}</p>
            </div>)
          })}

        </div>
      </div>
    )
  }
}

export default Portfolio;

export const query = graphql`
  query MyFilesQuery {
    allImageSharp {
      edges {
        node {
          id
        }
      }
    }
  }
`;
