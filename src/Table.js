import React, { Component } from 'react';
// import './App.css';

class Table extends Component {
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
              <tr key={index}>
                <td>{item}</td>
                <td val={index}><button onClick={()=>{this.props.removeIt(index)}}>Trash</button></td>
              </tr>)
          }
          </tbody>
      </table>
    );
  }
}

export default Table;
