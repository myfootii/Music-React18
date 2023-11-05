import { useState } from 'react'
import './App.css'
import {Button} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Button type='primary' onClick={()=>setCount(count+1)}>{count}</Button>
   </div>
  )
}

export default App
