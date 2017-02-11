import React, {Component} from 'react';
import marked from 'marked';

import CheckList from './CheckList.jsx';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }
  render() {
    let cardDetails;
    let cardDetailsClass;

    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span dangerouslySetInnerHTML={{
            __html: marked(this.props.description)
          }}/>
          <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      );
    }
    const openClass = 'card__title card__title--is-open';
    const closedClass = 'card__title';
    const sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    }

    return (
      <div className="card">
        <div style={sideColor}/>
        <div className={this.state.showDetails
          ? openClass
          : closedClass} onClick={() => this.setState({
          showDetails: !this.state.showDetails
        })}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
