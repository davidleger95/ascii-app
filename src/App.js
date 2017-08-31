import React, { Component } from 'react'
import logo from './logo.svg'
import './main.css';
import CharInput from './components/CharInput'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    window.onkeypress = ({ charCode, key }) => {
      this.setState({ charCode: charCode, key })
    }
  }

  componentWillUnount() {
    window.onkeypress = undefined
  }

  render() {
    const { charCode, key} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CharInput name="char-input" label="Character Code For" value={key} onChange={this.onChange} />
        </div>
        {charCode ?
          <p className="charCode">
            0{charCode.toString(2)}<sub>{2}</sub><br />
            {charCode.toString(4)}<sub>{4}</sub><br />
            {charCode.toString(8)}<sub>{8}</sub><br />
            {charCode.toString(10)}<sub>{10}</sub><br />
            {charCode.toString(16)}<sub>{16}</sub><br />
          </p> :
          <p>Press a key to get it's Unicode value.</p>
        }
      </div>
    );
  }
}

export default App
