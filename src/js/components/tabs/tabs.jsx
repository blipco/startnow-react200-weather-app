import React from 'react';

export default class Tabs extends React.Component {

  changeSanDiego(e) {

  };

  changeNewYork (e) {

  };

  changeWashington (e) {

  };

  changePhoenix (e) {

  };

  changeLa (e) {

  };
  
  render() {
    return (
      
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">San Diego</button>
        <button type="button" className="btn btn-primary">New York</button>
        <button type="button" className="btn btn-primary">Washington D.C</button>
        <button type="button" className="btn btn-primary">Phoenix</button>
        <button type="button" className="btn btn-primary">Los Angeles</button>
      </div>
    );
  }
}
