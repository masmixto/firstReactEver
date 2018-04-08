import React, { Component } from 'react';
// import './App.css';

class Table extends Component {
  removeIt(e){
  // var parentElement = e.target.parentNode;

  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>toDo</th>
          </tr>
          {
            this.props.items.map((item, index) =>
              <tr style={this.state.display} key={index}>
                <td>{item}</td>
                <td val={index} onClick={this.removeIt.bind(this)}>Trash</td>
              </tr>)
          }
          </tbody>
      </table>
    );
  }
}

export default Table;
