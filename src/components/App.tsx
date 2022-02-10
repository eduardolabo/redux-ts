import {Provider} from 'react-redux';
import {store} from '../state';
import RepositoriesList from './RepositoriesList';

type Props = {};

const App= () => {
  return <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoriesList/>
  </Provider>;
};

export default App;