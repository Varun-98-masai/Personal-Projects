
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store'
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainr from './Components/IceCreamContainr';
import SweetsContainer from './Components/SweetsContainer';
import CakeContainer from './Components/CakeContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <SweetsContainer/>
      <IceCreamContainr/>
      <NewCakeContainer/> */}
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
