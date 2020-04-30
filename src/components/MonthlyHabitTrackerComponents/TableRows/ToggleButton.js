import React, { useState } from 'react'

// Potentially use an onClick method within the <td></td> element itself?

function ToggleButton() {
  const value = ['Empty', 'Checked', 'Not Checked']
  const [toggle, setToggle] = useState(0)

  return (
    <div>
      <button onClick={() => setToggle(toggle + 1)}>{value[toggle]}</button>
    </div>
  )
}

export default ToggleButton
