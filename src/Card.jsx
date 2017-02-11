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

    return (
      <div className="card">
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
