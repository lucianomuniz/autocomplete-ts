import AutoComplete from './components/AutoComplete';
import useFetchData from './hooks/useFetchData';
import { JSON_FILE } from './utils/constants';

const App = () => {
  const jsonFile = JSON_FILE;
  const { data, isLoading } = useFetchData(jsonFile);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <h3>Search for a US City / State:</h3>
      <AutoComplete options={data} />
    </>
  );
};

export default App;
