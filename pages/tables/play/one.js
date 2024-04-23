import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout'
import { useEffect } from 'react'

export default function NewTable(){

  useEffect(() => {
    document.onload = function() {
      var element = document.getElementById("get-new-table-input");
      element.querySelector("input[name='which-table']").focus();
    }()
  })

  var handleSubmit = function(e){
    e.preventDefault();
  }

  return(
    <Layout>
      <Head>
        <title>
          Mind Multiplier
        </title>
      </Head>
      <div className="h-56 grid grid-cols-3 gap-4 place-items-center ...">
        <div></div>
        <form id="get-new-table-input" onSubmit={handleSubmit}>
          <div>
            <label> What table would you like to see? </label>
          </div>
          <div className="mt-3">
            <input type="text" name="which-table" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" />
            <button type="submit" className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700">
              Submit
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </Layout>
  );
}
