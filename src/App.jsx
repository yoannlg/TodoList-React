import { useState } from 'react'
import InputAdd from './components/InputAdd.jsx'
import TodoList from './components/TodoList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Input ADD */}
      <InputAdd/>
      <TodoList/>
      {/* TodoList  */}
    </>
  )
}

export default App
