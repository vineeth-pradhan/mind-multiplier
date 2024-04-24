import Head from 'next/head'
import Layout from '../../../components/layout'
import React from 'react';

class NewTable extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.focusOnInput();
  }

  focusOnInput(){
    var form = document.getElementById("get-new-table-input");
    form.querySelector("input[name='which-table']").focus();
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <Layout>
        <Head>
          <title>
            Mind Multiplier
          </title>
        </Head>
        <div className="h-56 grid grid-cols-3 gap-4 place-items-center ...">
          <div></div>
          <form id="get-new-table-input" onSubmit={this.handleSubmit}>
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
}

export default NewTable;
