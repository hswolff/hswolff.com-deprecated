'use strict';

require('./styles.less');

const React = require('react');

const ExternalNetworkIcon = require('../ExternalNetworkIcon');

module.exports = React.createClass({
  render: function() {
    return (
      <header className="container-fluid header">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <a href="http://blog.hswolff.com/" className="header-link">
              <h1 className="header-text">Harry <div className="header-link-img" /> Wolff</h1>
            </a>

            <div id="external-networks" className="external-networks">
              <ExternalNetworkIcon url="https://twitter.com/hswolff" title="Twitter" />
              <ExternalNetworkIcon url="https://www.facebook.com/harrywolff" title="Facebook" />
              <ExternalNetworkIcon url="https://foursquare.com/hswolff" title="Foursquare" />
              <ExternalNetworkIcon url="http://instagram.com/hswolff" title="Instagram" />
              <ExternalNetworkIcon url="https://plus.google.com/+HarryWolff" title="Google+" />
              <ExternalNetworkIcon url="http://www.linkedin.com/in/hswolff" title="LinkedIn" />
              <ExternalNetworkIcon url="https://github.com/hswolff" title="GitHub" />
            </div>
          </div>
        </div>
      </header>
    );
  }
});
