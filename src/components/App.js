import { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'

const initialState = {
  questions: [],
  index: 0,
  status: 'loading'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived': 
    return {...state, questions: action.payload, status: 'ready'}
    case 'dataFailed':
      return {...state, status: 'error'}
    case 'startQuiz': 
      return {...state, status: 'active'}
    default:
     throw new Error("Unknown action type")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {questions, status, index} = state
  const questionsQty = questions.length

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data => dispatch({ type: 'dataReceived', payload: data}))
    .catch(err => dispatch({ type: 'dataFailed'}))
  }, [])

  const handleStart = () => {
    dispatch({type: 'startQuiz'})
  }

  return <div className="app">
    <Header />
    <Main>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen quantity={questionsQty} onStartQuiz={handleStart}/>}
      {status === 'active' && <Question question={questions[index]} />}
    </Main>
  </div>
}

export default App