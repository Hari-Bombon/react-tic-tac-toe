import { useEffect, useState } from 'react'
import Cell from "./components/Cell"

const App =() => {
  const [cells, setCells] = useState(["" , "" , "" ,"" , "" , "" ,"" , "" , "" ])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWiningMessage] = useState(null)

  const message ="It is now" + go +"'s go."
  console.log(cells)


  const checkScore = () => {
    const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8] ,[2,4,6]
    ]

    winningCombos.forEach(array => {
     let circleWins = array.every(cell => cells[cells]==="circle")

     if (circleWins) {
      setWiningMessage("Circle Wins!")
      return
     }
    })
  }

  
  winningCombos.forEach(array => {
    let crossWins = array.every(cell => cells[cells]==="cross")

    if (crossWins) {
     setWiningMessage("Cross Wins!")
     return
    }
   })
  }
  useEffect(() => {
  checkScore()
 }, [cells])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cells, index) => 
        <Cell 
        key={index} 
        id={index} 
        cell={cells}
        setCells={setCells}
        go={go}
        setGo={setGo}
        cells={cells}
        winningMessage={winningMessage}
    />)}
   {/* <Cell/> */}
      </div>
  
      <p>{winningMessage || message}</p>
    </div>
  )
        

export default App;