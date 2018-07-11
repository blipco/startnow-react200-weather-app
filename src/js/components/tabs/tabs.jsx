import React from 'react';
import {updateSanDiego, 
        updateNewYork, 
        updateWashington, 
        updatePhoenix, 
        updateLa} from './tabsActions';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.clickSanDiego = this.clickSanDiego.bind(this);
    this.clickNewYork = this.clickNewYork.bind(this);
    this.clickWashington = this.clickWashington.bind(this);
    this.clickPhoenix = this.clickPhoenix.bind(this);
    this.clickLa = this.clickLa.bind(this);
  }

  clickSanDiego () {
    const {dispatch} = this.props;
    dispatch(updateSanDiego());
  };

  clickNewYork () {
    const {dispatch} = this.props;
    dispatch(updateNewYork());
  };

  clickWashington () {
    const {dispatch} = this.props;
    dispatch(updateWashington());
  };

  clickPhoenix () {
    const {dispatch} = this.props;
    dispatch(updatePhoenix());
  };

  clickLa () {
    const {dispatch} = this.props;
    dispatch(updateLa());
  };
  
  render() {
    return (

      <div className="btn-group" role="group">
        <button onClick={this.clickSanDiego} type="button" className="btn btn-primary">
          San Diego
        </button>
        <button onClick={this.clickNewYork} type="button" className="btn btn-primary">
          New York
        </button>
        <button onClick={this.clickWashington} type="button" className="btn btn-primary">
          Washington D.C
          </button>
        <button onClick={this.clickPhoenix} type="button" className="btn btn-primary">
          Phoenix
        </button>
        <button onClick={this.clickLa} type="button" className="btn btn-primary">
          Los Angeles
        </button>
      </div>
    );
  }
}
