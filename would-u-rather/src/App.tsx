import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
// import useFetch from './hooks/useFetch';

type Data = {
  id: number,
  data: string
}

function App() {
  const [questionData, setQuestionData] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch('https://would-you-rather-api.abaanshanid.repl.co/')
      const data = await res.json()
      console.log(data)
      setQuestionData(data.data)
    }
    fetchQuestion()
  }, [count])

  function handleClick() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <h1>{questionData}</h1>
      <Button onClick={handleClick} text="New Question" />

    </div>
  );
}

export default App;
