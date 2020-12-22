import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from './header'

// https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md

const Readme = () => {
  const [content, setContent] = useState()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(
      (text) => {
        setContent(text.data)
      }
    )
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div className="p-4" id="description">
        <ReactMarkdown source={content} />
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
