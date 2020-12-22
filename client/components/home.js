import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from './head'

import Main from './main'
import Repolist from './repolist'
import Readme from './readme'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <Repolist />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
