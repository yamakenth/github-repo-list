import { useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { RepoContext } from '../utils/RepoContext';
import { fetchPublicRepos } from '../utils/api';
import { range } from '../utils/utils';

const PageControls = () => {
  // useContext for repo and curRepo states
  const { repos, setRepos, curRepos, setCurRepos } = useContext(RepoContext);
  
  // change curRepos onClick on specific page number
  const handlePageClick = (i) => {
    if (i * 10 > repos.length - 1) {
      fetchPublicRepos(repos[repos.length - 1].id).then(data => setRepos(repos.concat(data)));
    }
    setCurRepos([i * 10, i * 10 + 9]);
  }

  // move to previous page on "< Previous" click
  const handlePrevClick = () => {
    if (curRepos[0] === 0) return;
    setCurRepos([curRepos[0] - 10, curRepos[1] - 10]);
  }

  // move to next page on "Next >" click
  const handleNextClick = () => {
    if (curRepos[1] + 1 === repos.length) {
      fetchPublicRepos(repos[curRepos[1]].id).then(data => setRepos(repos.concat(data)));
    }
    setCurRepos([curRepos[0] + 10, curRepos[1] + 10]);
  }
  
  return (
    <div className='control-container'>
      
      {/* "< Previous" */}
      <button className='slide' type='button' onClick={handlePrevClick}>
        <FaChevronLeft />&nbsp;Previous
      </button>

      {/* "1" when current page num >= 2 */}
      {curRepos[0]> 0 &&
        <button className='page' type='button' onClick={() => handlePageClick(0)}>1</button>
      }
      {/* "..." next to "1" when curent page num >= 3 */}
      {curRepos[0]> 10 &&
        <span>&middot;&nbsp;&middot;&nbsp;&middot;</span>
      }

      {/* list of page nums, list only 5, "..." at the end */}
      {
        range(curRepos[0] / 10 + 1, 5).map(n => {
          return (
            <button 
              className={`page ${(curRepos[0] / 10 + 1 === n) ? 'active': null}`} 
              key={n} 
              type='button' 
              onClick={() => handlePageClick(n - 1)}
            >
              {n}
            </button>
          );
        })
      }
      <span>&middot;&nbsp;&middot;&nbsp;&middot;</span>

      {/* "Next >" */}
      <button className='slide' type='button' onClick={handleNextClick}>
        Next&nbsp;<FaChevronRight />
      </button>
    </div>
  )
}

export default PageControls;