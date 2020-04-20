import React from 'react'
import Title from '../components/MonthlyHabitTrackerComponents/Title/Title'
import MonthTabs from '../components/MonthlyHabitTrackerComponents/MonthTabs/MonthTabs'
import Days from '../components/MonthlyHabitTrackerComponents/Days/Days'
import HabitNames from '../components/MonthlyHabitTrackerComponents/HabitNames/HabitNames'
import Container from 'react-bootstrap/Container'
import SuccessTracker from '../components/MonthlyHabitTrackerComponents/SuccessTracker/SuccessTracker'

const MonthlyHabitTracker = (props) => {
  return (
    <Container>
      <Title />
      <MonthTabs />
      <Days />
      <HabitNames />
      <SuccessTracker />
    </Container>
  )
}

export default MonthlyHabitTracker
