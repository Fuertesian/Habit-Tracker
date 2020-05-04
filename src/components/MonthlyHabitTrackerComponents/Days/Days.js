import React, { useState } from 'react'
const Days = (props) => {
  
  let tableDataStateList = []
  for (let num = 0; num <= 31; num++) {
    tableDataStateList.push(0)
  }

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

  let daysRowList = []
  for (let i = 1; i <= 31; i++) {
    daysRowList.push(<td key={i} style={getIcon()} onClick={getClick}></td>)
  }

  return daysRowList
}

export default Days
