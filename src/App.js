import React from 'react'
import './App.css'
import MonthlyHabitTracker from './containers/MonthlyHabitTracker'
import ToggleButton from './components/MonthlyHabitTrackerComponents/TableRows/ToggleButton'

function App() {
  return (
    <div>
      <ToggleButton />
      <MonthlyHabitTracker />
    </div>
  )
}

export default App
