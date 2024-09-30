import React, {useState} from 'react'
import {Button} from 'antd'
import './App.scss'

function App() {
  let [count, setCount] = useState<number>(0)

  return (
    <div className="as__app">
      <h2>PWA!</h2>

      <Button onClick={() => {
        setCount(count += 2)
      }}>
        Hello {count}
      </Button>
    </div>
  );
}

export default App
