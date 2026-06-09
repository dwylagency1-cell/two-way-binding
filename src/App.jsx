import { useState } from "react"

function App() {

  const [title, setTitle] = useState('')
  function form(e) {
    e.preventDefault()
    console.log(`form submited ${title}`)
    setTitle('')
  }
  function onchange(elem) {
    setTitle(elem.target.value)
  }
  return <div>
    <form onSubmit={function(e) {
      form(e)
    }}>
      <input className="inp" type="text" placeholder="Enter your name" value={title} onChange={onchange}></input><br></br>
      <button className="button">Submit</button>
    </form>
  </div>
}

export default App
