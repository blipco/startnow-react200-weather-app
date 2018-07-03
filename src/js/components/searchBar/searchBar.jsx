import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div className="input-group input-group-sm">
          <input type="text" className="form-control mb-3"/>
          <div className="input-group-append">
            <button className="input-group-text mb-3">Go!</button>
          </div>
        </div>
      </div>
    );
  }
}