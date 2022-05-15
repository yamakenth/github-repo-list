import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api.github.com/repositories';

const ListDisplay = () => {
  // store repos as state 
  const [repos, setRepos] = useState([]);
  
  // fetch list of repos based on "since" id params
  const fetchRepos = (since) => {
    fetch(baseUrl + '?since=' + since, {
      method: 'GET',
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.log('Request Failed', err));  
  }

  // load first batch of repos on componentDidMount
  useEffect(() => {
    fetchRepos(0)
  }, []);
  
  return (
    <div>
      <h2>ListDisplay</h2>
      <div>
        {
          repos.map(repo => {
            return (
              <div key={repo.id}>
                <p>
                  <strong>ID: </strong>{repo.id}&nbsp;
                  <strong>Name: </strong><a href={repo.html_url}>{repo.full_name}</a>&nbsp;
                  <strong>Owner: </strong><a href={repo.owner.html_url}>{repo.owner.login}</a>&nbsp;
                  <strong>Description: </strong>{repo.description}&nbsp;
                </p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ListDisplay;