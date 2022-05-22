import React, { useEffect, useState } from 'react';

import './styles/App.css';
import Header from './components/Header';
import ListDisplay from './components/ListDisplay';
import PageControls from './components/PageControls';
import { fetchPublicRepos } from './utils/api';
import { RepoContext } from './utils/RepoContext';

const App = () => {
  // repos = [repo1Data, repo2Data, ...] 
  // data directly from api call
  const [repos, setRepos] = useState([]);
  // curRepos = [start, end] 
  // current repo list on display, start = first index, end = last index incl.
  const [curRepos, setCurRepos] = useState([0, 9]);

  // load first batch of repos on componentDidMount
  useEffect(() => {
    fetchPublicRepos(0).then(data => setRepos(data));
  }, []);

  return (
    <div id='app'>
      <Header />
      <main>
        <RepoContext.Provider value={{ repos, setRepos, curRepos, setCurRepos }}>
          <ListDisplay />
          <PageControls />
        </RepoContext.Provider>
      </main>
    </div>
  );
}

export default App;