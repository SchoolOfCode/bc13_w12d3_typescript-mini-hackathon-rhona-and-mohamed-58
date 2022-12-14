import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import useFetch from './hooks/useFetch';

function App() {
  const [questionData, setQuestionData] = useState({})
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch('https://would-you-rather-api.abaanshanid.repl.co/')
      const data = await res.json()
      console.log(data)
      setQuestionData(data)
    }
    fetchQuestion()
  }, [count])

  return (
    <div>
      <p>testing</p>
      <Button onClick={() => setCount(1)}>New question</Button>
    </div>
  );
}

export default App;
