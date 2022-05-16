import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api.github.com/repositories';
const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/vnd.github.v3+json' } //, 'Authorization': 'Basic' + btoa('yamakenth')} // DELETE DELETE DELETE 
}

const ListDisplay = () => {
  // store repos as state 
  const [repos, setRepos] = useState([]);
  
  // fetch list of repos based on "since" id params
  const fetchPublicRepos = (url) => {
    fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        const apiUrls = data.map(item => item.url);
        setRepos(apiUrls);
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
      <div>
        {
          JSON.stringify(repos)
        }
      </div>
    </div>
  )
}

export default ListDisplay;