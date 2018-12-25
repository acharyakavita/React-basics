import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
  state = {
    length: 0,
    data: ''
  }
  changeHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      data: event.target.value
    })
  }

  deleteHandler=(index)=>{
    const text=this.state.data.split('');
    text.splice(index,1);
    const newData=text.join('');
    this.setState(({data:newData}))
  }

  render() {
    const char = this.state.data.split('').map((ch,index) => 
      { 
        return (<Char data={ch} key={index} click={()=>this.deleteHandler(index)}/>) 
      })

    return (
      <div className="App">
        <input onChange={this.changeHandler} type="text" value={this.state.data}></input>
        <p>{this.state.data}</p>
        <Validation length={this.state.length} />
        {char}
      </div>
    );
  }
}

export default App;
