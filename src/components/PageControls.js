const PageControls = (props) => {
  // change curRepos onClick
  const handlePageClick = (i) => {
    console.log('clicked on ' + i);
    props.setCurRepos([i * 10, i * 10 + 9]);
  }
  
  return (
    <div>
      <button type='button'>Previous</button>
      {
        range(props.curRepos[0], props.curRepos[1]).map(n => {
          return (
            <button key={n % 10} type='button' onClick={() => handlePageClick(n % 10)}>
              {n % 10 + 1}
            </button>
          );
        })
      }
      <span>&middot;&nbsp;&middot;&nbsp;&middot;</span>
      <button type='button'>Next</button>
    </div>
  )
}

// utils
function range(min, max) {
  return [...Array(max - min + 1).keys()].map(i => i + min);
}

export default PageControls;