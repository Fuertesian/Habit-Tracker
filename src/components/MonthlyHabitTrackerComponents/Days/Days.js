import React from 'react'
const Days = (props) => {
  let daysRowList = []
  for (let i = 1; i <= 31; i++) {
    daysRowList.push(<td key={i}></td>)
  }

  return daysRowList
}

export default Days