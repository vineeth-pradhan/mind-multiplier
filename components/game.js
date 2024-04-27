import Layout from './layout'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const CurrentFocus = dynamic(() => import('./current-focus.js'), { ssr: false })

class Game extends React.Component{
  constructor(){
    super()
    this.state = {
      table: 14,
      wrongAnswers: {},
      correctAnswers: {},
      remainingMultipliers: [1,2,3,4,5,6,7,8,9,10],
      currentRandomMultiplier: null
    }
  }

  componentDidMount(){
    this.setCurrentRandomMultiplier()
  }

  setCurrentRandomMultiplier(){
    let currentRemainingMultipliers = this.state.remainingMultipliers
    let randomMultiplierIndex = Math.floor(Math.random() * this.state.remainingMultipliers.length)
    this.setState({ currentRandomMultiplier: currentRemainingMultipliers[randomMultiplierIndex] })
    currentRemainingMultipliers.splice(randomMultiplierIndex, 1)
    this.setState({ remainingMultipliers: currentRemainingMultipliers })
  }

  render(){
    return(
      <div className="fixed left-[345px] max-w-[55%] overflow-y-auto max-h-[80%]">
        { this.state.remainingMultipliers.length > 0 &&
          <CurrentFocus
            remainingMultipliers={this.state.remainingMultipliers}
            currentTable={this.state.table}
            currentRandomMultiplier={this.state.currentRandomMultiplier}
          />
        }
      </div>
    )
  }
}

export default Game
