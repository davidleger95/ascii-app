import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '_',
      radix: 16
    }
  }

  componentWillMount() {

    window.onkeypress = ({ charCode, key }) => {
      this.setState({ charCode: charCode, key })
    }
  }

  componentWillUnount() {
    window.onkeypress = undefined
  }

  toggleRadix = () => {
    const radix = this.state.radix === 10 ? 16 : 10
    this.setState({ radix })
  }

  render() {
    const { charCode, key, radix} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Unicode for '{key}':</h1>
        </div>
        <button onClick={this.toggleRadix}>Use base {radix === 10 ? 16 : 10}</button>
        {charCode ?
          <p className="charCode">{charCode.toString(radix)}<sub>{radix}</sub></p> :
          <p>Press a key to get it's Unicode value.</p>
        }
      </div>
    );
  }
}

export default App
