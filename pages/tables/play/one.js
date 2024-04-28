import Layout from '../../../components/layout'
import React from 'react'

class NewTable extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.focusOnInputElement()
  }

  focusOnInputElement(){
    document.getElementById("one-div").querySelector("[focus='true']").focus()
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render(){
    return(
      <Layout>
        <div id="one-div" className="h-56 grid grid-cols-3 gap-4 place-items-center ...">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label> What table would you like to see? </label>
            </div>
            <div className="mt-3">
              <input type="text" name="which-table" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" focus="true" />
              <button type="submit" className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default NewTable
