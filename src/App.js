import React, { Component } from 'react'
import CharInput from './components/CharInput'
import CharCode from './components/CharCode'
import Instructions from './components/Instructions'
import Footer from './components/Footer'

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
    let keyValue = key;
    if (key === ' ') keyValue = '\u2420'
    if (key === 'Enter') keyValue = '\u240D'
    return (
      <div className="App">
        <div className="App-header">
          <div role="presentation" className="App-spinner">{spinner}</div>
          <CharInput name="char-input" label="Character Code For" value={keyValue} onChange={this.onChange} />
        </div>
        <div className="App-body">
          {charCode ? <CharCode value={charCode} /> : <Instructions />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
