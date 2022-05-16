const PageControls = (props) => {
  return (
    <div>
      <button type='button'>Previous</button>
      {
        range(props.curRepos[0], props.curRepos[1]).map(n => {
          return (
            <button key={n} type='button'>{n + 1}</button>
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