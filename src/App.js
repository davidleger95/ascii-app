import React, { Component } from 'react'
import './main.css';
import CharInput from './components/CharInput'
import CharCode from './components/CharCode'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    window.onkeypress = ({ charCode, key }) => {
      this.setState({ charCode: charCode, key })
    }
    let spinner;
    setInterval((i) => {
      switch (this.state.spinner) {
        case '—': spinner = '\\'
          break;
        case '\\': spinner = '/'
          break;
        default:
          spinner = '—'
      }

      this.setState({ spinner })
    }, 250)
  }

  componentWillUnount() {
    window.onkeypress = undefined
  }

  render() {
    const { charCode, key, spinner} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-spinner">{spinner}</h1>
          <CharInput name="char-input" label="Character Code For" value={key} onChange={this.onChange} />
          <p><em>Press a key to get it's Unicode value.</em></p>
        </div>
        <CharCode value={charCode} />
      </div>
    );
  }
}

export default App
