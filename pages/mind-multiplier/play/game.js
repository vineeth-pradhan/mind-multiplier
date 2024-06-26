import Layout from '../../../components/layout.js';
import Score from '../../../components/score.js';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
const QuestionAndInput = dynamic(() => import('../../../components/mind-multiplier/question-and-input.js'), { ssr: false });
const _multipliers = [1,2,3,4,5,6,7,8,9,10];

function Game(){
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [table, setTable] = useState(parseInt(router.query.table));
  const [remainingMultipliers, setRemainingMultipliers] = useState(_multipliers);
  const [currentRandomMultiplier, setCurrentRandomMultiplier] = useState(null);
  const [randomMultiplierIndex, setRandomMultiplierIndex] = useState();

  useEffect(() => {
    if(isNaN(table)){ router.push("/mind-multiplier/play/one"); }
    else{ calculateCurrentRandomMultiplier(); }
  },[]);

  var calculateCurrentRandomMultiplier = function(){
    let randomMultiplierIndex = Math.floor(Math.random() * remainingMultipliers.length);
    setRandomMultiplierIndex(randomMultiplierIndex);
    setCurrentRandomMultiplier(remainingMultipliers[randomMultiplierIndex]);
  }

  var pressGo = function(subjectInputElement, correctAnswer){
    if(parseInt(subjectInputElement.value) == correctAnswer){
      var currentRemainingMultipliers = remainingMultipliers;
      currentRemainingMultipliers.splice(randomMultiplierIndex, 1);
      setRemainingMultipliers(currentRemainingMultipliers);
      calculateCurrentRandomMultiplier();
      setScore(score+1);
    }
    else{
      console.log("Wrong")
      console.log(correctAnswer)
      setScore(score-1);
    }
  }

  return(
    <Layout>
      <div className="fixed left-[40%] max-w-[55%] overflow-y-auto max-h-[80%]">
        { remainingMultipliers.length > 0 ? (
          <QuestionAndInput
            remainingMultipliers={remainingMultipliers}
            currentTable={table}
            currentRandomMultiplier={currentRandomMultiplier}
            setRemainingMultipliers={setRemainingMultipliers}
            randomMultiplierIndex={randomMultiplierIndex}
            pressGo={pressGo}
          />
        ):(
            <div className="fixed left-[40%] max-w-[55%] overflow-y-auto max-h-[80%]">
              <Score score={score}/>
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default Game;
