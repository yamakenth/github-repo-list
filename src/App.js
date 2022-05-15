import ListDisplay from './components/ListDisplay';

const App = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>List Public GitHub Repositories</h1>
      </header>
      {/* List Display */}
      <ListDisplay />
    </div>
  );
}

export default App;