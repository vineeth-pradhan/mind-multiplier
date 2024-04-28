import Layout from './layout';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const CurrentFocus = dynamic(() => import('./current-focus.js'), { ssr: false });

function Game(){
  const [table, setTable] = useState(14);
  const [remainingMultipliers, setRemainingMultipliers] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [currentRandomMultiplier, setCurrentRandomMultiplier] = useState(null);
  const [randomMultiplierIndex, setRandomMultiplierIndex] = useState();

  useEffect(() => {
    calculateCurrentRandomMultiplier();
  })

  var calculateCurrentRandomMultiplier = function(){
    let randomMultiplierIndex = Math.floor(Math.random() * remainingMultipliers.length);
    setRandomMultiplierIndex(randomMultiplierIndex);
    setCurrentRandomMultiplier(remainingMultipliers[randomMultiplierIndex]);
  }

  return(
    <div className="fixed left-[345px] max-w-[55%] overflow-y-auto max-h-[80%]">
      { remainingMultipliers && remainingMultipliers.length > 0 ? (
        <CurrentFocus
          remainingMultipliers={remainingMultipliers}
          currentTable={table}
          currentRandomMultiplier={currentRandomMultiplier}
          setRemainingMultipliers={setRemainingMultipliers}
          randomMultiplierIndex={randomMultiplierIndex}
        />
      ):(
          <div>
            Done
          </div>
        )
      }
    </div>
  )
}

export default Game
