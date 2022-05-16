import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api.github.com/repositories';
const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
}

const ListDisplay = () => {
  // store repos api urls as state 
  const [repos, setRepos] = useState([]);
  
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
      <h2>ListDisplay</h2>
      <div>{JSON.stringify(repos)}</div>
    </div>
  )
}

export default ListDisplay;