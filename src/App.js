import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import ListDisplay from './components/ListDisplay';
import PageControls from './components/PageControls';

const baseUrl = 'https://api.github.com/repositories';
const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
}

const App = () => {
  // store repos as state 
  const [repos, setRepos] = useState([]);
  // store current page of 10 repos *start & end inclusive
  const [curRepos, setCurRepos] = useState([0, 9])
  
  // fetch list of repos based on "since" id params
  const fetchPublicRepos = (url) => {
    fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
      })
      .catch(err => console.log('Request Failed', err));  
  }

  // load first batch of repos on componentDidMount
  useEffect(() => {
    fetchPublicRepos(baseUrl + '?since=0');
  }, []);

  return (
    <div>
      <Header />
      <ListDisplay repos={repos} setRepos={setRepos} curRepos={curRepos} setCurRepos={setCurRepos} />
      <PageControls curRepos={curRepos} setCurRepos={setCurRepos} />
    </div>
  );
}

export default App;