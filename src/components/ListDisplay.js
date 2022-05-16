import { useContext } from 'react';
import { RepoContext } from '../utils/context';

const ListDisplay = (props) => {
  const { repos } = useContext(RepoContext);
  
  return (
    <div className='table-container'>
      <div>{'JSON.stringify(repos)'}</div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Repo ID</th>
            <th>Repo Name</th>
            <th>Owner ID</th>
            <th>Owner Name</th>
            <th>Repo Description</th>
          </tr>
        </thead>
        <tbody>
          {
            repos.slice(props.curRepos[0], props.curRepos[1] + 1).map(repo => {
              return (
                <tr key={repo.id}>
                  <td className='repo-no'>{repos.findIndex(e => e.id === repo.id) + 1}</td>
                  <td><a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.id}</a></td>
                  <td>{repo.name}</td>
                  <td><a href={repo.owner.html_url} target='_blank' rel='noreferrer'>{repo.owner.id}</a></td>
                  <td>{repo.owner.login}</td>
                  <td className='repo-description'>{repo.description}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListDisplay;