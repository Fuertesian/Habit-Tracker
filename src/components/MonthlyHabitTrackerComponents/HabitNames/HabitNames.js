import React from 'react'
// import Form from 'react-bootstrap/Form'

const HabitNames = () => {
  // form should not be added for every new input This is what you are doing
  /* <form>
        <input/>
      </form>
      <form>
        <input>
      </form>

      There should only be one form tag
      Also you should be using the Input component from react-bootstrap
      */
  return (
    <form> 
      <input type='text' placeholder='Add New Habit' />
    </form>
  )
}
export default HabitNames
