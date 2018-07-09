import React from 'react';

export default class SearchHistory extends React.Component {
  render() {
    return (
      <div>
        <div className='card' id='search-card-border'>
          <div className='card-header'id='search-card-header'>
            Search History
          </div>
          <div className='card-body'>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td scope='col'>A</td>
                  <td scope='col'>A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
