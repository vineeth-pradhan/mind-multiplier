import Layout from './layout';
import { useState, useEffect } from 'react';

function Score({score}){
  return(
    <div className="fixed left-[1390px] max-w-[20%] min-w-[20%] overflow-y-auto max-h-[80%]">
      <h1 className="sticky top-0 text-4xl px-[35%] flex items-center selection:bg-fuchsia-300 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm"> Score </h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Current Score</div>
          <div className="stat-value text-primary">{score}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  )
}

export default Score;
