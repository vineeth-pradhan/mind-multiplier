import Layout from './layout'
import React from 'react'
import dynamic from 'next/dynamic'
const CurrentFocus = dynamic(() => import('./current-focus.js'), { ssr: false })

class Game extends React.Component{
  constructor(){
    super()
    this.state = {
      table: 14,
      wrongAnswers: {},
      correctAnswers: {},
      remainingMultipliers: [1,2,3,4,5,6,7,8,9,10]
    }
  }

  render(){
    return(
      <div className="fixed left-[345px] max-w-[55%] overflow-y-auto max-h-[80%]">
        <CurrentFocus
          remainingMultipliers={this.state.remainingMultipliers}
          currentTable={this.state.table}
        />
      </div>
    )
  }
}

export default Game
