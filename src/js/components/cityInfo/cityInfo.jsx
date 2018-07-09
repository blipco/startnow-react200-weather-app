import React from 'react';

export default class CityInfo extends React.Component {
  render() {
    return (
      <div>
        <div className='card'id='city-card-border'>
          <div className='card-header' id='city-card-header'>
            City Information
          </div>
          <div className='card-body'>
            <div className='row'>

            </div>
            <hr/>
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Temperature (F)</p>
                <p className='text-center'>A</p>
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Pressure</p>
                <p className='text-center'>A</p>
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Humidity</p>
                <p className='text-center'>A</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Lowest Temp(F)</p>
                <p className='text-center'>A</p>
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Highest Temp(F)</p>
                <p className='text-center'>A</p>
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>Wind Speed</p>
                <p className='text-center'>A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
