import React from 'react'

export default function New() {
    const animal='cat';
    return (
        <div>
          <div>
        {animal === 'cat' ? <span>'야옹'</span> : <span>'멍멍'</span>}
  </div></div>
      )
}

