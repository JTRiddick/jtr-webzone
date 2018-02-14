import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";


import '../assets/scss/style.scss';

class PortfolioItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showModal:false,
      item:{
        title:""
      },
      resolutions:{},
      disableBackgroundClicks:props.clickState
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    console.log('portfolio props @ will mount :', this.props)
    const item = this.props.piece.node;
    const resolutions = item.resolutions;
    this.setState({
      item,
      resolutions
    })
  }

  handleClick(){
    // console.log('handleClick called ,', this.state.showModal)
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));

  }

  render(){
    // console.log('portfolio item props at render: ', this.props);
    // console.log('modal on? ', this.state.showModal);
    // console.log('pointer status ?', this.state.pointerEvents);
    let item = this.state.item;
    let resolutions = this.state.resolutions;
    let pointerEvents = this.state.pointerEvents ? 'auto' : 'none';
    let modal = (<div className={`modal`}>
      <div className={`modal-content`}>
        <div
          onClick={this.handleClick}
          className={'button'}>X
        </div>
        <h3><span>{item.title}</span></h3>
        <Img resolutions={resolutions} />
        <p>
          {item.text}
        </p>
      </div>
    </div>);

    const displayItem = (
      <div
        className={`portfolio-item`}
        style={{
          pointerEvents:this.state.disableBackgroundClicks
        }}
        onClick={this.handleClick}>

        <h4><span>{item.title}</span></h4>

        <a>
          <Img resolutions={resolutions} className={'thumbnail'}/>
        </a>

        <p className={`portfolio-content`}>{`${item.subtitle}`}</p>
      </div>)

    return(
      <div style={{}}>
        {displayItem ? displayItem : ""}
        {this.state.showModal ? modal : ""}
      </div>
  )};
}
export default PortfolioItem;
