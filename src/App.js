
import Header from './components/Layout/header';
import Navigation from './components/Layout/navigation';
// Import Redux
import { Provider } from 'react-redux';
import store from './store/store.js';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-main">
      <Header></Header>
      <Navigation></Navigation>
      <div className="app-main__content">
        <Outlet></Outlet>
      </div>
    </div>
  );

}

export default App;
