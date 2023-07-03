import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import coinImage from './assets/SingleCoin.jpeg'
import coins from './assets/Coins.jpeg'
import flowers from './assets/Flowers.png'


import './App.css'
var counter = 0

function App() {
  const [count, setCount] = useState(counter)
  const [showDescr, setDesc] = useState(false)

  const artWorks = [
    {
      path: coins,
      description: "These are ceramic recreations of ancient byzantine coins",
      id: 0
    },
    {
      path: coinImage,
      description: "This is an individual coin from the collection, the inscription on the side reads \"heraclius, emperor of the romans\"",
      id: 1
    },
    {
      path: flowers,
      description: "This is a floral design I created for tshirts, it is inspired by classical Japanese floral designs seen on tattoos",
      id: 2
    }
  ]

  const handleClick = () => {
    console.log("pre increment = " + counter)
    counter++
    console.log("post increment = " + counter)
    if(counter > artWorks.length-1) {
      counter = 0
    }
    console.log("setting final value = " + counter)
    setCount(counter)
    setDesc(false)
  }

  const handleShowDescButtonClick = () =>{
    setDesc(!showDescr)
  }


  return (
    <>
    <h1>
      A Minimalist Art Gallery
    </h1>
    <h3> by Darius Ramavarapu</h3>
      <Item artWorks={artWorks} count={count} handleClick={handleClick} otherClick={handleShowDescButtonClick} showDescr={showDescr}></Item>
    </>
  )
}

const Item = ({artWorks, count, handleClick,otherClick, showDescr}) => (
  <div>
    <img src={artWorks[count].path} key={artWorks[count].id} className= "logo vite"/>
    <div>

    <button onClick={()=>{handleClick()}} className='buttons'> Next </button>
    <button onClick={()=> {otherClick()}} className='action_button'> Show More </button>
    {showDescr && <h2> {artWorks[count].description}</h2> }
    </div>
  </div>
)

export default App
