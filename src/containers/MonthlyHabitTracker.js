import React from 'react'
import Title from '../components/MonthlyHabitTrackerComponents/Title/Title'
import MonthTabs from '../components/MonthlyHabitTrackerComponents/MonthTabs/MonthTabs'
import Container from 'react-bootstrap/Container'
// import HabitTable from './HabitTable'

const MonthlyHabitTracker = (props) => {
  return (
    <Container>
      <Title />
      <MonthTabs />
      {/* <HabitTable /> */}
    </Container>
  )
}

export default MonthlyHabitTracker
