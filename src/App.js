import React, { useEffect, useState } from 'react';

import './styles/App.css';
import Header from './components/Header';
import ListDisplay from './components/ListDisplay';
import PageControls from './components/PageControls';
import { fetchPublicRepos } from './utils/api';
import { RepoContext } from './utils/context';

const App = () => {
  // store repos as state 
  const [repos, setRepos] = useState([]);
  // store current page of 10 repos *start & end inclusive
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