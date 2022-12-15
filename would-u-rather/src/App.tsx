import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

type Data = {
  id: number,
  data: string
}

function App() {
  const [questionData, setQuestionData] = useState("")
  const [count, setCount] = useState(0)
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')


  useEffect(() => {
    async function fetchQuestion() {
      const res = await fetch('https://would-you-rather-api.abaanshanid.repl.co/')
      const data:Data = await res.json()
      console.log(data)
      setQuestionData(data.data)
    }
    fetchQuestion()
  
  }, [count])

  function splitQuestion(q:string):void {
    let arr = q.split(' or ')
    let str1 = arr[0].replace("Would you rather ", '')
    let str2 = arr[1].replace('?', '')
    setOption1(str1)
    setOption2(str2)
  }


  function handleClick() {
    setCount(count + 1)
    console.log(count)
    splitQuestion(questionData)
  }

  return (
    <div className='App'>
      <h1>Would you rather...</h1>
      <div className='buttons'>
        <Button className='option1' onClick={handleClick} text={option1} />
         <span className='or'>OR</span> 
        <Button className='option2' onClick={handleClick} text={option2} />
      </div>
      <Button className="newQuestion" onClick={handleClick} text="New Question" />

    </div>
  );
}

export default App;
