import React from 'react';
export default class SearchHistory extends React.Component {

  render() {
    return (
      <div>
        <div className='card' 
             id='search-card-border'>
          <div className='card-header' 
               id='search-card-header'>
            Search History
          </div>
          <div className='card-body'>
            <table className='table table-striped'>
              <tbody>
                {this.props.history.map(historyItem => (
                  <tr>
                    <td id='city-name' 
                        scope='col'>
                        {historyItem.cityNombre}
                        </td>
                    <td id='search-date' 
                        scope='col'>
                        {historyItem.searchDate}
                        </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
};
