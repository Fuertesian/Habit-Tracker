import React, { useState } from 'react'

// Potentially use an onClick method within the <td></td> element itself?

function ToggleButton() {
  const value = ['Empty', 'Checked', 'Not Checked']
  let [toggle, setToggle] = useState(0)

  if (toggle > 2) {
    toggle = 0
  }

  return (
    <div>
      <button onClick={() => setToggle(toggle + 1)}>{value[toggle]}</button>
    </div>
  )
}

export default ToggleButton
