import React from 'react'

const displayName = 'Footer'
Footer.displayName = displayName

export default function Footer() {
  return (
    <footer data-root={displayName}>
      <small>&copy; Copyright 2017 David Leger. MIT License.</small>
    </footer>
  )
}
