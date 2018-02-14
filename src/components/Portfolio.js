import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PortfolioItem from './PortfolioItem'


import '../assets/scss/style.scss';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pointerEvents:true
    }
    this.handleListClick = this.handleListClick.bind(this);
  }

  componentWillMount(){
    console.log('component will mount ', this);

  }

  componentDidMount(){
    console.log('component did mount ', this);

  }

  handleListClick(){
    console.log('meta click ');
    this.setState(prevState => ({
      pointerEvents: prevState.pointerEvents ? false : true
    }))
  }

  render(){
    console.log('pointer status ?', this.state.pointerEvents);
    const works = this.props.works;
    const images = this.props.images;
    works.map(piece => {
      let img = {};
      images.map((image, i) => {
        // console.log('image map ', image, i, piece);
        if (image.node.resolutions.originalName === piece.node.image){
          img = image.node
          Object.assign(piece.node,img)
        }
      })

      return works
    })

    // console.log('portfolio component props @ render: ', this.props);
    // console.log('works object :', works )

    return (
      <div>
        <h2>Important Works</h2>
        <div
          className="portfolio-list"
          style={{backgroundColor:`gray`,
          pointerEvents:this.state.pointerEvents ? 'auto' : 'none',
          }}
          onClick={this.handleListClick}
          >

          {works.map(piece => {
            // console.log('piece is ', piece.node);
            return (<div key={piece.node.set}
              style={{pointerEvents:this.state.pointerEvents ? 'auto' : 'none'}}>
              <PortfolioItem piece={works[`${piece.node.set-1}`]} clickState={this.state.pointerEvents}/>
            </div>)
          })}

        </div>
      </div>
    )
  }
}

export default Portfolio;
