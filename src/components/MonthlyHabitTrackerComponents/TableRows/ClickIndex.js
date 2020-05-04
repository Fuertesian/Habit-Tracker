import React, { useState } from 'react'

// Potentially use an onClick method within the <td></td> element itself?

const ClickIndex = () => {
  const value = ['Empty', 'Checked', 'Not Checked']
  const [clickIndex, setClickIndex] = useState(0)

  if (clickIndex > 2) {
    setClickIndex(0)
  }

  const getClick = () => {
    setClickIndex(clickIndex + 1)
  }

  const getIcon = () => {
    if (clickIndex === 0) {
      return { backgroundColor: 'white' }
    } else if (clickIndex === 1) {
      return { backgroundColor: 'green' }
    } else {
      return { backgroundColor: 'red' }
    }
  }

  return (
    <div>
      {/* <button style={getIcon()} onClick={getClick}>
        {value[clickIndex]}
      </button> */}
      <td style={getIcon}onClick ={getClick}>{value[clickIndex]}</td>
    </div>
  )
}

export default ClickIndex
