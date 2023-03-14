import { Provider } from "react-redux";
import appstore from "./redux/store";
import ZuzApp from "./ZuzApp";
function App(){
    return (
        <Provider store={appstore}>
          <ZuzApp/>
        </Provider>
    )
}

export default App;