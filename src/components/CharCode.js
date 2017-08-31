import React from 'react'
import ProptTypes from 'prop-types'
import toRadix from '../utils/toRadix'


const RADICES = [2, 10, 16];
const displayName = 'CharCodeTable'
CharCode.displayName = displayName
CharCode.propTypes = {
  value: ProptTypes.number
}

export default function CharCode({ value, ...rest }) {
  return (
    <table data-root={displayName}>
      <thead>
        <tr>
          {RADICES.map((r, i)=> <th key={i}>{r}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {value && RADICES.map((r, i) => <td key={i}>{toRadix(value, r)}<sub>{r}</sub></td>)}
        </tr>
      </tbody>
    </table>
  )
}
