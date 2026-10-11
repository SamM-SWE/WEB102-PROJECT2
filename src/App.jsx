import { useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const updateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * (flashcards.length)))
  }



  const flashcards = [
    {
      question: "What is the sum of 1 + 1",
      answer: "2",
      type:"Addition"
    },
    {
      question: "What is the sum of 2 + 2",
      answer: "4",
      type:"Addition"
    },
    {
      question: "What is the sum of 3 + 3",
      answer: "6",
      type:"Addition"
    },
    {
      question: "What is the sum of 4 + 4",
      answer: "8",
      type:"Addition"
    },
    {
      question: "What is the sum of 5 + 5",
      answer: "10",
      type:"Addition"
    },
    {
      question: "What is the sum of 2 x 2",
      answer: "4",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 4 x 4",
      answer: "16",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 8 x 8",
      answer: "64",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 9 x 9",
      answer: "81",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 10 x 10",
      answer: "100",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 100 x 100",
      answer: "1000",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 1 - 1",
      answer: "0",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 2 - 1",
      answer: "1",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 10 - 5",
      answer: "5",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 20 - 10",
      answer: "10",
      type:"Subtraction"
    }
    ,
    {
      question: "What is the sum of 100 - 50",
      answer: "50",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 2 ÷ 2",
      answer: "1",
      type:"Division"
    },
    {
      question: "What is the sum of 4 ÷ 2",
      answer: "2",
      type:"Division"
    },
    {
      question: "What is the sum of 10 ÷ 2",
      answer: "5",
      type:"Division"
    },
    {
      question: "What is the sum of 24 ÷ 6",
      answer: "4",
      type:"Division"
    }
    

    
  ]


  return (
    <div className="App">
      <header>
        <h1 className="Title">Basic maths cards!</h1>
        <h2 className="Desc">Take a easier approach learning math with flashcards, for beginners!</h2>
        <h3 className="DeckCount">Number of cards in deck: {flashcards.length}</h3>
      </header>
        <Card key={randomNumber} Question={flashcards[randomNumber].question} Answer={flashcards[randomNumber].answer} type={flashcards[randomNumber].type}/>

        <button onClick={updateRandomNumber}>Next Slide</button>
    </div>
  )
}

export default App
