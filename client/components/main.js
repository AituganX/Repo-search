import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [inputtext, setInputtext] = useState('')
  const onChange = (event) => {
    setInputtext(event.target.value)
  }
  const onClick = () => {
    history.push(`/${inputtext}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input
            className="text-black"
            id="input-field"
            type="text"
            inputtext={inputtext}
            onChange={onChange}
          />
          <button className="m-2" id="search-button" type="button" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
