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
      <table>
        <tr>
          <th>Repo ID</th>
          <th>Repo Name</th>
          <th>Owner ID</th>
          <th>Owner Name</th>
          <th>Repo Description</th>
        </tr>
        {
          repos.map(repo => {
            return (
              <tr key={repo.id}>
                <td>{repo.id}</td>
                <td>{repo.name}</td>
                <td>{repo.owner.id}</td>
                <td>{repo.owner.login}</td>
                <td>{repo.description}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  )
}

export default ListDisplay;