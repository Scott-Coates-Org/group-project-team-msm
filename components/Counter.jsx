import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import { getUsers } from '../redux/usersSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(getUsers())}>
          Fetch users and write them to DB
        </button>
      </div>
    </div>
  )
}

export default Counter
