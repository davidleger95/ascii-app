import React from 'react'

const displayName = 'Instructions'
Instructions.displayName = displayName

export default function Instructions () {
  return (
    <dl data-root={displayName}>
      <dt>Keyboard Device</dt>
      <dd>Press any key to get it's Unicode value.</dd>
      <dt>Touch Devices</dt>
      <dd>
        <ol>
          <li>
            Tap on <code>Character Code For _</code> to access the
            on-screen keyboard.
          </li>
          <li>
            Press any key to get it's Unicode value.
          </li>
        </ol>
      </dd>
    </dl>
  )
}
