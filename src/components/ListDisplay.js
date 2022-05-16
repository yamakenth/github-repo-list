const ListDisplay = (props) => {
  return (
    <div>
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
            props.repos.slice(props.curRepos[0], props.curRepos[1] + 1).map(repo => {
              return (
                <tr key={repo.id}>
                  <td>{props.repos.findIndex(e => e.id === repo.id) + 1}</td>
                  <td>{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>{repo.owner.id}</td>
                  <td>{repo.owner.login}</td>
                  <td>{repo.description}</td>
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