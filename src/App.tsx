

import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className='text-center mx-auto border'>
        <div className="flex gap-6">
          <button onClick={() => dispatch(increment())} className="border-2 border-green-600 rounded-md px-2 py-3">
            Increment
          </button>
          <div className="text-center text-4xl font-bold">{count}</div>
          <button onClick={() => dispatch(decrement())} className="border-2 border-red-600 rounded-md px-2 py-3">
            Decrement
          </button>

          <button onClick={() => dispatch(incrementByAmount(5))} className="border-2 border-green-600 rounded-md px-2 py-3">
            Increment By Value
          </button>
        </div>
      </div>
    </>
  )
}

export default App
