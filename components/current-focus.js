import { useState, useEffect } from 'react';

function CurrentFocus(props){
  const [subjectInputElement, setSubjectInputElement] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [form, setForm] = useState();

  useEffect(() => {
    let element = document.getElementById("focus-div").querySelector("form");
    setForm(element)
  });

  useEffect(() => {
    let element = document.getElementById("focus-div").querySelector("[focus='true']") 
    element.focus();
    setSubjectInputElement(element);
  });

  useEffect(() => {
    setCorrectAnswer(props.currentTable * props.currentRandomMultiplier);
  });

  var handleSubmit=function(e){
    e.preventDefault();
    props.pressOk(subjectInputElement, correctAnswer);
    form.reset();
  }

  return(
    <div id="focus-div" className="h-56 grid grid-cols-1 gap-4 place-items-center ...">
      <form onSubmit={handleSubmit.bind(this)}>
        <label> {props.currentTable} </label>
        <label> x </label>
        <label> {props.currentRandomMultiplier} = </label>
        <input type="text" name="table-answer" className="border border-black rounded-full text-xl indent-3 focus-visible:outline-none" focus="true" />
        <button type="submit" className="ml-3 px-2 py-2 font-semibold rounded-full border border-sky-700 text-sm bg-sky-500 hover:bg-sky-700"> Ok 
        </button>
      </form>
    </div>
  )
}

export default CurrentFocus
