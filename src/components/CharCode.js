import React from 'react'
import PropTypes from 'prop-types'
import toRadix from '../utils/toRadix'
import leftPad from '../utils/leftPad'

const RADICES = [
  {
    base: 2,
    padding: 8
  },
  {
    base: 10,
    padding: 3
  }, {
    base: 16,
    padding: 2
  }
];
const displayName = 'CharCodeTable'
CharCode.displayName = displayName
CharCode.propTypes = {
  value: PropTypes.number.isRequired
}

export default function CharCode({ value, ...rest }) {
  return (
    <dl data-root={displayName}>
      {RADICES.map((radix, key) => (
        <span className="radix-item">
          <dt>Base {radix.base}</dt>
          <dd>{leftPad(toRadix(value, radix.base), radix.padding, '0')}<sub>{radix.base}</sub></dd>
        </span>
      ))}
    </dl>
  )
}
