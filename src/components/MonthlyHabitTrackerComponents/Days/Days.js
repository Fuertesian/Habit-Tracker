import React, { useState } from 'react'

const Days = (props) => {
  let tableDataStateList = []
  for (let num = 0; num <= 31; num++) {
    tableDataStateList.push(0)
  }

  // const [clickIndex, setClickIndex] = useState(0)
    // if (clickIndex > 2) {
  //   setClickIndex(0)
  // }

  // const getClick = () => {
  //   setCl
  
  const [rowClickIndex, setRowClickIndex] = useState({})

  // utility functions
  const getClickNumber = (tableDataId, rowDataObj) => {
    let clickNumber = rowDataObj[tableDataId]
    if (clickNumber === undefined) {
      clickNumber = 1
    } else if (clickNumber === 2) {
      clickNumber = 0
    } else {
      clickNumber = clickNumber + 1
    }
    return clickNumber
  }

// table data functions
  const handleClick = (event) => {
    let obj = { ...rowClickIndex }
    const clickNumber = getClickNumber(event.target.id, obj)
    // debugger
    obj[event.target.id] = clickNumber
    setRowClickIndex(obj)
  }

  const getIcon = (tableDataId) => {
    let clickNumber =
      rowClickIndex[tableDataId] !== undefined ? rowClickIndex[tableDataId] : 0
    if (clickNumber === 0) {
      return { backgroundColor: 'white' }
    } else if (clickNumber === 1) {
      return { backgroundColor: 'green' }
    } else {
      return { backgroundColor: 'red' } 
    }
  }

  // component functions
  let daysRowList = []
  for (let i = 1; i <= 31; i++) {
    daysRowList.push(
      <td id={i} key={i} style={getIcon(i)} onClick={handleClick}></td>
    )
  }


  return daysRowList
}

export default Days
