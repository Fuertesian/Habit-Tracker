import React from 'react'
import Table from 'react-bootstrap/Table'
import TableHeader from '../components/MonthlyHabitTrackerComponents/TableHeader/TableHeader'
import HabitNames from '../components/MonthlyHabitTrackerComponents/HabitNames/HabitNames'
import Days from '../components/MonthlyHabitTrackerComponents/Days/Days'
import SuccessTracker from '../components/MonthlyHabitTrackerComponents/SuccessTracker/SuccessTracker'

const HabitTable = (props) => {
  function AddNewRow() {
    return (
      <tr>
        <td>
          <HabitNames />
        </td>
        <Days />
        <td>
          <SuccessTracker />
        </td>
      </tr>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <HabitNames />
            </td>
            <Days />
            <td>
              <SuccessTracker />
            </td>
          </tr>
          {AddNewRow()}
        </tbody>
      </Table>
    </div>
  )
}

export default HabitTable
