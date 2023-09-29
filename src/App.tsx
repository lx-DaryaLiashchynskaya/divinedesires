import './App.scss';
import {Header} from "./components/Header/Header";
import {useState} from "react";
import { ThemeContext } from './context/themeContext';
import {getDefaultTheme} from "./utils/theme.utils";

function App() {
    const [theme, setTheme] = useState(getDefaultTheme);

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
              <div className={`app ${theme}`}>
                  <div className={`appContainer ${theme}`}>
                      <Header />
                      <div className={'bodyContainer'}>body</div>
                  </div>
              </div>
      </ThemeContext.Provider>
  );
}

export default App;
