import React from 'react'
// import Days from '../Days/Days'

const TableHeader = (props) => {
    let daysHeaderList = []
  for (let i = 1; i <= 31; i++) {
    daysHeaderList.push(<th key={i}>{i}</th>)
  }
    return (
      <>
        <th>Habits</th>
        {daysHeaderList}
        <th>Success %</th>
      </>
  )
}

export default TableHeader
