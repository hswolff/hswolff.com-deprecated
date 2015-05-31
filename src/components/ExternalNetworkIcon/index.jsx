'use strict';

require('./styles.less');

const React = require('react');
const {Tooltip, OverlayTrigger} = require('react-bootstrap');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    url: React.PropTypes.string
  },

  getImageNamed: function(name) {
    // @TODO: switch to use webpack's url-loader (and make server not barf on it).
    // return require('../../public/images/external-networks/' + name);
    return '/images/external-networks/' + name + '.png';
  },

  render: function() {
    return (
      <OverlayTrigger
          placement="top"
          overlay={<Tooltip>{this.props.title}</Tooltip>}>

        <a href={this.props.url} title={this.props.title}>
          <img src={this.getImageNamed(this.props.title.toLowerCase())} alt={this.props.title} />
        </a>
      </OverlayTrigger>
    );
  }
});
