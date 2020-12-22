import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const Repolist = () => {
  const { userName } = useParams()
  const [value, setValue] = useState([])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repoName = it.data.map((repo) => repo.name)
      setValue(repoName)
    })
  }, [userName])

  return (
    <div>
      <Header />
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <div>
              {value.map((item) => {
                return (
                  <div key={item}>
                    <Link to={`${userName}/${item}`}>{item}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default Repolist
