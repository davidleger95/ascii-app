import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CharInput extends Component {
  static displayName = 'CharInput';
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.input.focus()
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  render() {
    const { name, label, value, onChange, ...rest } = this.props
    return (<span data-root={this.constructor.displayName}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange || this.onChange}
        ref={(input) => this.input = input}
        {...rest}
      />
    </span>)
  }
}

export default CharInput
