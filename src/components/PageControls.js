import { range } from '../utils/utils';

const PageControls = (props) => {
  const repos = props.repos;
  const setRepos = props.setRepos;
  const curRepos = props.curRepos;
  const setCurRepos = props.setCurRepos;
  const baseUrl = props.baseUrl;
  const headers = props.headers;

  // fetch list of repos based on "since" id params
  const fetchPublicRepos = (url, headers) => {
    console.log('fetching new data...');
    fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        setRepos(repos.concat(data));
      })
      .catch(err => console.log('Request Failed', err));
  }
  
  // change curRepos onClick
  const handlePageClick = (i) => {
    console.log('clicked on ' + i);
    setCurRepos([i * 10, i * 10 + 9]);
  }

  // move to previous page
  const handlePrevClick = () => {
    console.log('clicked on Previous');
    if (curRepos[0] === 0) {
      return;
    }
    setCurRepos([curRepos[0] - 10, curRepos[1] - 10]);
  }

  // move to next page
  const handleNextClick = () => {
    console.log('clicked on Next');
    if (curRepos[1] + 1 === repos.length) {
      fetchPublicRepos(`${baseUrl}?since=${repos[curRepos[1]].id}`, headers);
    }
    setCurRepos([curRepos[0] + 10, curRepos[1] + 10]);
  }
  
  return (
    <div>
      <button type='button' onClick={handlePrevClick}>Previous</button>
      {
        range(curRepos[0] / 10 + 1, 10).map(n => {
          return (
            <button key={n} type='button' onClick={() => handlePageClick(n - 1)}>
              {n}
            </button>
          );
        })
      }
      <span>&middot;&nbsp;&middot;&nbsp;&middot;</span>
      <button type='button' onClick={handleNextClick}>Next</button>

      <div>{'curRepos: ' + JSON.stringify(curRepos)}</div>

    </div>
  )
}

export default PageControls;