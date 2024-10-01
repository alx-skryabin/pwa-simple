import React, {useEffect, useState} from 'react'
import {Button} from 'antd'

const CountButton = () => {
  let [count, setCount] = useState<number>(0)

  useEffect(() => {
    const savedNum = localStorage.getItem('number')
    if (savedNum) {
      setCount(JSON.parse(savedNum))
    }
  }, [])

  const increment = () => {
    const num = count += 2
    localStorage.setItem('number', JSON.stringify(num))
    setCount(num)
  }

  return (
    <Button onClick={increment} type="primary">
      Number {count}
    </Button>
  )
}

export default CountButton
