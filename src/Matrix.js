import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

<<<<<<< HEAD
Matrix.defaultProps = {
  values: [
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00'],
  ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00', '#F00','#F00']
  
  ]
}
  
=======
Matrix.defaultProps = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
  ];
>>>>>>> ecff8e3c047cac41e850d2552345b2f16788cc9c
