import React from 'react';
import {updateSearch} from './searchActions';
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.changeSearchBar = this.changeSearchBar.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
  };

  changeSearchBar(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  };

  clickSearchButton(e) {

  };

  render() {
    return (
      <div>
        <div className="input-group input-group-sm">
          <input value={this.props.userQuery} onChange={this.changeSearchBar} type="text" className="form-control mb-3"/>
          <div className="input-group-append">
            <button onClick={this.clickSeachButton}className="input-group-text mb-3">Go!</button>
          </div>
        </div>
      </div>
    );
  }
}