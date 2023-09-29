import './App.scss';
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className="app">
        <div className={'appContainer'}>
            <Header />
            <div className={'bodyContainer'}>body</div>
        </div>
    </div>
  );
}

export default App;
