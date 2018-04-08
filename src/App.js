import React, { Component } from 'react';
import Table from "./Table";
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      placeholder: "What to do?",
      actualElement: '',
      list: []
    };
  }

  removeIt(index) {
    //let {list} = this.state;
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({list});
  }

  onChange(e){
      e.preventDefault();
      this.setState({ actualElement: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      actualElement: '',
      list: [...this.state.list, this.state.actualElement]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input placeholder={this.state.placeholder} onChange={this.onChange.bind(this)} />
          <input type="submit" />
        </form>
       <Table removeIt={this.removeIt.bind(this) } items={this.state.list} />
      </div>
    );
  }
}

export default App;
