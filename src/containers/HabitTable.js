import React from 'react'
import Table from 'react-bootstrap/Table'
import Days from '../components/MonthlyHabitTrackerComponents/Days/Days'

const HabitTable = (props) => {
  let daysList = <Days />

  let tableRow = []
  for (let num = 1; num <= daysList.length + 2; num++) {
    tableRow.push(<td></td>)
  }

  for (let i = 1; i <= 33; i++) {
    tableRow[i] = <td></td>
  }

  return (
    <>
      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <th>
              <center>Habits</center>
            </th>
            {daysList}
            <th>
              <center>Success %</center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>{tableRow}</tr>
        </tbody>
      </Table>
    </>
  )
}


export default HabitTable
