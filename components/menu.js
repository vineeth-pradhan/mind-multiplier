import React from 'react';
import Link from 'next/link';

function Menu(){
  return(
    <div className="fixed left-[2%] max-w-[20%] overflow-y-auto max-h-[80%]">
      <ul className="menu bg-base-200 w-56 rounded-box min-w-[20%]">
        <li><Link href="/tables/recite-all">Recite</Link></li>
        <li>
          <details close="true">
            <summary>Play</summary>
            <ul>
              <li><Link href="/mind-multiplier/play/one">One Table</Link></li>
              <li><Link href="/tables/play/master">Master</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
