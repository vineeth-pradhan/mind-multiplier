import React from 'react';
import Link from 'next/link'

export default class Menu extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li><Link href="/tables/recite-all">Recite</Link></li>
        <li>
          <details close>
            <summary>Play</summary>
            <ul>
              <li><Link href="/tables/play/one">One Table</Link></li>
              <li><Link href="/tables/play/master">Master</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    )
  }
}
