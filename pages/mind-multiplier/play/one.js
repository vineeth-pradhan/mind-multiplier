import Layout from '../../../components/layout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function NewTable(){
  const router = useRouter();

  useEffect(() => {
    focusOnInputElement();
  },[])

  var focusOnInputElement = () => {
    document.getElementById("one-div").querySelector("[focus='true']").focus();
  }

  var pressOk = (e) => {
    e.preventDefault();
    let table_value = parseInt(e.target.querySelector("input[name='which-table']").value);
    if(!isNaN(table_value)){
      router.push(`/mind-multiplier/play/game?table=${table_value}`);
    }
  }

  return(
    <Layout>
      <div id="one-div" className="fixed left-[40%] max-w-[55%] overflow-y-auto max-h-[80%]">
        <form onSubmit={pressOk}>
          <div>
            <label> What table would you like to see? </label>
          </div>
          <div className="mt-3">
            <input type="text" name="which-table" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" focus="true" />
            <button type="submit" className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700">
              Go!
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default NewTable;
