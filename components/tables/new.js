import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'

export default function NewTable(){
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    document.onload = function() {
      var element = document.getElementById("get-new-table-input");
      element.querySelector("input[name='which-table']").focus();
    }()
  })

  return(
    <>
      <Head>
        <title>
          Mind Multiplier
        </title>
      </Head>
      <div id="get-new-table-input">
        <div>
          <label> What table would you like to see? </label>
        </div>
        <div className="mt-3">
          <input type="text" name="which-table" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" />
          <button className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
