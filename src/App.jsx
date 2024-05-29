import Navbar from "./components/Navbar";
import Page from "./components/Page";
import {Provider} from 'react-redux';
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-white">
        <Navbar />
        <Page />
      </div>
    </Provider>
  );
}

export default App;
