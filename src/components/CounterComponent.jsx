
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions'
import { getCurrentCount } from '../redux/selectors'

const CounterComponent = () => {

  const count = useSelector(getCurrentCount);
  const dispatch = useDispatch()


  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default CounterComponent