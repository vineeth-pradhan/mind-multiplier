import React from 'react'

class CurrentFocus extends React.Component{
  constructor(){
    super()
    this.state = { subjectInputElement: null, correctAnswer: null }
  }

  componentDidMount(){
    this.focusOnInputElement()
    this.setCorrectAnswer()
  }

  focusOnInputElement(){
    this.subjectInputElement = document.getElementById("focus-div").querySelector("[focus='true']")
    this.subjectInputElement.focus()
  }

  setCorrectAnswer(){
    this.setState({ correctAnswer: this.props.currentTable * this.props.currentRandomMultiplier })
  }

  handleSubmit(e){
    e.preventDefault()
    if(parseInt(this.subjectInputElement.value) == this.state.correctAnswer){
      console.log("correct")
      console.log(this.state.correctAnswer)
    }
    else{
      console.log("Wrong")
      console.log(this.state.correctAnswer)
    }
  }

  render(){
    return(
      <div id="focus-div" className="h-56 grid grid-cols-1 gap-4 place-items-center ...">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> {this.props.currentTable} </label>
          <label> x </label>
          <label> {this.props.currentRandomMultiplier} = </label>
          <input type="text" name="table-answer" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" focus="true" />
          <button type="submit" className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700"> Ok 
          </button>
        </form>
      </div>
    )
  }
}

export default CurrentFocus
