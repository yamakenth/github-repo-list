import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import ListDisplay from './components/ListDisplay';
import PageControls from './components/PageControls';
import { fetchPublicRepos } from './utils/api';

import './styles/App.css';

const App = () => {
  // store repos as state 
  const [repos, setRepos] = useState([]);
  // store current page of 10 repos *start & end inclusive
  const [curRepos, setCurRepos] = useState([0, 9])

  // load first batch of repos on componentDidMount
  useEffect(() => {
    fetchPublicRepos(0).then(data => setRepos(data));
  }, []);

  return (
    <div id='app'>
      <Header />
      <main>
        <ListDisplay repos={repos} setRepos={setRepos} curRepos={curRepos} setCurRepos={setCurRepos} />
        <PageControls repos={repos} setRepos={setRepos} curRepos={curRepos} setCurRepos={setCurRepos} />
      </main>
    </div>
  );
}

export default App;