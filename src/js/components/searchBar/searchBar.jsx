import React from 'react';
import { updateSearch, updateWeatherInfo, updateHistory } from './searchActions';

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

  clickSearchButton() {
    const { dispatch } = this.props;
    const { userQuery } = this.props;
    dispatch(updateWeatherInfo(userQuery));
    dispatch(updateHistory(userQuery));

  };

  render() {
    const { userQuery } = this.props;
    return (
      <div>
        <div className="input-group input-group-sm">
          <input value={userQuery} 
                 onChange={this.changeSearchBar} 
                 className="form-control mb-3" />
          <div className="input-group-append">
            <button onClick={this.clickSearchButton} 
                    className="input-group-text mb-3">
                    Go!
            </button>
          </div>
        </div>
      </div>
    );
  };
};